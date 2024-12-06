const express = require('express');
const { login, protected } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.get('/protected', protected);

module.exports = router;
