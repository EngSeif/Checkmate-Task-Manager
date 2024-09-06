const express = require('express');
const { client, connectDB, closeDB } = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

// Optionally, handle graceful shutdown by closing the database connection
process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});