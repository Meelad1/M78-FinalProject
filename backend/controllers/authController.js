const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Hardcoded credentials
const CREDENTIALS = { username: 'Meelad', password: 'Meelad' };

// Login handler
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

// Protected route example
exports.protected = (req, res) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ message: 'Token is required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ message: 'Protected content', user: decoded });
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
