require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: 'http://104.131.170.203', // Allow requests from the frontend
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers for authentication
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Chart Data Endpoints
app.get('/api/data/summary', (req, res) => {
  const summaryData = {
    labels: ['ChatGPT', 'DALL-E', 'MidJourney', 'Runway ML'],
    datasets: [
      {
        label: 'Adoption in Industries (%)',
        data: [85, 70, 65, 50],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
      },
    ],
  };
  res.json(summaryData);
});

app.get('/api/data/reports', (req, res) => {
  const reportsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly User Engagement (in Millions)',
        data: [10, 12, 15, 18, 20, 25],
        borderColor: '#FF6384',
        tension: 0.3,
        fill: false,
      },
    ],
  };
  res.json(reportsData);
});

// Root Route
app.get('/', (req, res) => {
  res.send('Backend API is running.');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
