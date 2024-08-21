const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error", () => {
    console.log("Error in connecting to database");
});

connection.on('connected', () => {
    console.log("Connected to database");
});

module.exports = mongoose;