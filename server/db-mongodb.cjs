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
    return { users: [] };
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
  updateUser
};
