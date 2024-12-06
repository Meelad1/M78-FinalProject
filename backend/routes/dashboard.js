const express = require('express');
const { getSummary, getChart1, getChart2 } = require('../controllers/dashboardController');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

// Protected routes
router.get('/summary', verifyToken, getSummary);
router.get('/chart1', verifyToken, getChart1);
router.get('/chart2', verifyToken, getChart2);

module.exports = router;
