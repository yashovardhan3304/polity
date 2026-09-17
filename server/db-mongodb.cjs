// db.cjs - MongoDB connection (for Vercel deployment)
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;
const USE_LOCAL = !MONGODB_URI;

let client = null;
let db = null;

// Fallback to local JSON for development if no MongoDB
const DATA_FILE = path.join(__dirname, 'data.json');

function getLocalData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return { users: [], progress: [] };
  }
}

function saveLocalData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Initialize MongoDB connection
async function connectDB() {
  if (!MONGODB_URI) {
    console.log('⚠️  Using local JSON storage (development mode)');
    return null;
  }

  try {
    if (!client) {
      client = new MongoClient(MONGODB_URI);
      await client.connect();
      db = client.db('polity');
      console.log('✅ Connected to MongoDB');
    }
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('⚠️  Falling back to local JSON storage');
    return null;
  }
}

// User operations
async function getUserByEmail(email) {
  const database = await connectDB();

  if (!database) {
    // Fallback to local JSON
    const data = getLocalData();
    return data.users.find(u => u.email === email) || null;
  }

  const usersCollection = database.collection('users');
  const user = await usersCollection.findOne({ email });
  return user ? { id: user._id.toString(), ...user } : null;
}

async function getUserById(id) {
  const database = await connectDB();

  if (!database) {
    const data = getLocalData();
    return data.users.find(u => u.id === id) || null;
  }

  const usersCollection = database.collection('users');
  const { ObjectId } = require('mongodb');
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });
  return user ? { id: user._id.toString(), ...user } : null;
}

async function createUser(username, email, passwordHash) {
  const database = await connectDB();
  const newUser = {
    username,
    email,
    passwordHash,
    createdAt: new Date(),
    completedTopics: [],
    savedLessons: [],
    savedArticles: []
  };

  if (!database) {
    // Fallback to local JSON
    const data = getLocalData();
    newUser.id = Date.now().toString();
    data.users.push(newUser);
    saveLocalData(data);
    return newUser;
  }

  const usersCollection = database.collection('users');
  const result = await usersCollection.insertOne(newUser);
  return { id: result.insertedId.toString(), ...newUser };
}

function studyDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(date);
}

function emptyProgress(userId) {
  return {
    userId,
    completedTopics: [], savedLessons: [], savedArticles: [], savedTraps: [],
    savedCards: [], masteredCards: [], streak: 0, quizPoints: 0, weakTopics: [],
    lastStudyDate: null, updatedAt: new Date().toISOString()
  };
}

async function getUserProgress(userId) {
  const database = await connectDB();
  if (!database) {
    const data = getLocalData();
    data.progress ||= [];
    let progress = data.progress.find(item => item.userId === userId);
    if (!progress) {
      progress = emptyProgress(userId);
      data.progress.push(progress);
      saveLocalData(data);
    }
    return progress;
  }

  const progressCollection = database.collection('progress');
  const progress = await progressCollection.findOne({ userId });
  if (progress) return progress;
  const initialProgress = emptyProgress(userId);
  await progressCollection.insertOne(initialProgress);
  return initialProgress;
}

async function saveUserProgress(userId, progressData) {
  const database = await connectDB();
  const today = studyDate();
  const yesterday = studyDate(new Date(Date.now() - 24 * 60 * 60 * 1000));

  if (!database) {
    const data = getLocalData();
    data.progress ||= [];
    const index = data.progress.findIndex(item => item.userId === userId);
    const existing = index === -1 ? emptyProgress(userId) : data.progress[index];
    const streak = existing.lastStudyDate === today ? existing.streak : existing.lastStudyDate === yesterday ? existing.streak + 1 : 1;
    const updated = { ...existing, ...progressData, userId, streak, lastStudyDate: today, updatedAt: new Date().toISOString() };
    if (index === -1) data.progress.push(updated); else data.progress[index] = updated;
    saveLocalData(data);
    return updated;
  }

  const progressCollection = database.collection('progress');
  const existing = await progressCollection.findOne({ userId });
  const streak = existing?.lastStudyDate === today ? existing.streak : existing?.lastStudyDate === yesterday ? existing.streak + 1 : 1;
  const updated = { ...(existing || emptyProgress(userId)), ...progressData, userId, streak, lastStudyDate: today, updatedAt: new Date().toISOString() };
  delete updated._id;
  await progressCollection.updateOne({ userId }, { $set: updated }, { upsert: true });
  return updated;
}

async function updateUser(userId, updates) {
  const database = await connectDB();

  if (!database) {
    const data = getLocalData();
    const userIndex = data.users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      data.users[userIndex] = { ...data.users[userIndex], ...updates };
      saveLocalData(data);
    }
    return data.users[userIndex] || null;
  }

  const usersCollection = database.collection('users');
  const { ObjectId } = require('mongodb');
  const result = await usersCollection.findOneAndUpdate(
    { _id: new ObjectId(userId) },
    { $set: updates },
    { returnDocument: 'after' }
  );
  return result.value ? { id: result.value._id.toString(), ...result.value } : null;
}

module.exports = {
  connectDB,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  getUserProgress,
  saveUserProgress
};
