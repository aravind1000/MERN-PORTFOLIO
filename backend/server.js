const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require('./routes/portfolioRoute');

// Enable CORS for your frontend domain
app.use(cors({
    origin: 'https://aravind-tech-wizard.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// JSON parsing middleware
app.use(express.json());

// API routes
app.use('/api/portfolio', portfolioRoute);

// Serve the root route
app.get('/', (req, res) => {
    res.send('Backend API is running...');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
