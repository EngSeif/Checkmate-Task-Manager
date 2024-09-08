const express = require('express');
const { client, connectDB, closeDB } = require('./config/db');
const bcrypt = require('bcrypt');
const { registerUser, loginUser } = require('./controllers/userController');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// User registeration and login Routes
app.post('/register', registerUser);
app.post('/login', loginUser);



// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
// Optionally, handle graceful shutdown by closing the database connection
process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});