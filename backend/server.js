const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require('cors');
const portfolioRoute = require('./routes/portfolioRoute');

// Control allow origin
app.use(cors(
    {
        origin: ["https://aravind-tech-wizard.onrender.com"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// JSON parsing middleware
app.use(express.json());

// API routes
app.use('/api/portfolio', portfolioRoute);

// Serve the root route
app.get('/', (req, res) => {
    res.send('Backend API is running...');
});

// Define the port
const port = process.env.PORT || 5000;

// Serve static files from the React app in production
if (process.env.NODE_ENV === "production") {
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
