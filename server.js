const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require('./routes/portfolioRoute');

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

const path = require('path');

if(process.env.PORT === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
