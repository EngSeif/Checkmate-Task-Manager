const express = require('express');
const { client, connectDB, closeDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler'); 

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use('/user', userRoutes); // User routes
app.use('/tasks', taskRoutes); // Task routes



// Generic error hndler for uncought error
app.use(errorHandler)

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
// handle closing the database connection
process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});