const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require('cors');
const portfolioRoute = require('./routes/portfolioRoute');

app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
