const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
// Local JSON is useful for development; Vercel uses MongoDB so each account's
// progress is durable across serverless function invocations.
const db = process.env.MONGODB_URI ? require('./db-mongodb.cjs') : require('./db.cjs');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'blackboard_secret_key_123';
const NODE_ENV = process.env.NODE_ENV || 'development';

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Use this endpoint to confirm that Vercel has deployed the API function.
app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'polity-api' });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
}

// REGISTER End-point
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields (username, email, password) are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const existingUser = await db.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Account with this email already exists.' });
    }

    // Hash password with pure-JS bcryptjs
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await db.createUser(username, email, passwordHash);

    // Sign JWT token
    const token = jwt.sign({ id: newUser.id, username: newUser.username, email: newUser.email }, JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      username: newUser.username,
      email: newUser.email
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Internal server error during registration.' });
  }
});

// LOGIN End-point
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await db.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Sign JWT token
    const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      username: user.username,
      email: user.email
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error during login.' });
  }
});

// GET Progress Profile
app.get('/api/progress', authenticateToken, async (req, res) => {
  try {
    const progress = await db.getUserProgress(req.user.id);
    res.status(200).json(progress);
  } catch (err) {
    console.error('Fetch progress error:', err);
    res.status(500).json({ error: 'Internal server error while retrieving study progress.' });
  }
});

// SAVE/SYNC Progress Profile
app.post('/api/progress', authenticateToken, async (req, res) => {
  try {
    const progressData = req.body;
    if (!progressData) {
      return res.status(400).json({ error: 'Progress data body is required.' });
    }

    const updated = await db.saveUserProgress(req.user.id, progressData);
    res.status(200).json(updated);
  } catch (err) {
    console.error('Save progress error:', err);
    res.status(500).json({ error: 'Internal server error while syncing study progress.' });
  }
});

// Serve client static production assets from 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback all non-API GET requests to index.html for React Router / SPA routing compatibility
app.get(/.*/, (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Run a local HTTP server only when this file is started directly. On Vercel,
// the same Express app is imported by the serverless API function instead.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Polity Master server running on http://localhost:${PORT}`);
    if (JWT_SECRET === 'blackboard_secret_key_123') {
      console.warn('\x1b[33m%s\x1b[0m', 'SECURITY WARNING: Using default JWT secret key. Please configure process.env.JWT_SECRET in production.');
    }
  });
}

module.exports = app;
