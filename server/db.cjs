const fs = require('fs').promises;
const path = require('path');

const DB_FILE = process.env.DB_PATH || path.join(__dirname, 'data.json');

// Serialization queue (mutex) to prevent concurrent write/read race conditions
let dbPromise = Promise.resolve();

async function enqueue(operation) {
  const result = dbPromise.then(operation);
  // Guarantee queue progression even if the current operation fails
  dbPromise = result.catch(() => {});
  return result;
}

async function initDb() {
  try {
    await fs.access(DB_FILE);
  } catch (err) {
    // File doesn't exist, create it with default schema
    const defaultData = {
      users: [],
      progress: []
    };
    await fs.writeFile(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf8');
    console.log('Database file created successfully.');
  }
}

// Internal non-locked methods to avoid deadlocks inside the queue
async function readDbInternal() {
  await initDb();
  const content = await fs.readFile(DB_FILE, 'utf8');
  return JSON.parse(content);
}

async function writeDbInternal(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Public API methods wrapped in the queue
async function getUserByEmail(email) {
  return enqueue(async () => {
    const db = await readDbInternal();
    return db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  });
}

async function getUserById(id) {
  return enqueue(async () => {
    const db = await readDbInternal();
    return db.users.find(u => u.id === id);
  });
}

async function createUser(username, email, passwordHash) {
  return enqueue(async () => {
    const db = await readDbInternal();
    
    // Safety check inside the lock to prevent duplicate emails under concurrent calls
    const exists = db.users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      throw new Error('User already exists');
    }

    const newUser = {
      id: 'usr-' + Math.random().toString(36).substr(2, 9),
      username,
      email,
      passwordHash,
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);

    // Initialize empty progress profile for this user
    const defaultProgress = {
      userId: newUser.id,
      completedTopics: [],
      savedLessons: [],
      savedArticles: [],
      savedTraps: [],
      savedCards: [],
      masteredCards: [],
      streak: 1,
      quizPoints: 0,
      weakTopics: [],
      updatedAt: new Date().toISOString()
    };

    db.progress.push(defaultProgress);

    await writeDbInternal(db);
    return newUser;
  });
}

async function getUserProgress(userId) {
  return enqueue(async () => {
    const db = await readDbInternal();
    let progress = db.progress.find(p => p.userId === userId);
    
    if (!progress) {
      progress = {
        userId,
        completedTopics: [],
        savedLessons: [],
        savedArticles: [],
        savedTraps: [],
        savedCards: [],
        masteredCards: [],
        streak: 1,
        quizPoints: 0,
        weakTopics: [],
        updatedAt: new Date().toISOString()
      };
      db.progress.push(progress);
      await writeDbInternal(db);
    }
    
    return progress;
  });
}

async function saveUserProgress(userId, progressData) {
  return enqueue(async () => {
    const db = await readDbInternal();
    const index = db.progress.findIndex(p => p.userId === userId);

    const updatedProgress = {
      ...progressData,
      userId,
      updatedAt: new Date().toISOString()
    };

    if (index !== -1) {
      db.progress[index] = updatedProgress;
    } else {
      db.progress.push(updatedProgress);
    }

    await writeDbInternal(db);
    return updatedProgress;
  });
}

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  getUserProgress,
  saveUserProgress
};
