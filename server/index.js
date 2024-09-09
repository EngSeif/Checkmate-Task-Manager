const express = require('express');
const { client, connectDB, closeDB } = require('./config/db');
const bcrypt = require('bcrypt');
const { registerUser, loginUser } = require('./controllers/userController');
const { addTask, getTasks, updateTask, deleteTask, getTasksByPriority, getTasksByStatus } = require('./controllers/taskController');
const authenticateToken = require('./middlewares/authenticateToken'); 
const errorHandler = require('./middlewares/errorHandler'); // Import error handler

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

// Task routes
app.get('/tasks', authenticateToken, getTasks) // Get all user tasks
app.get('/tasks/filter', authenticateToken, getTasksByPriority); // Filtering by priority using query
app.get('/tasks/status', authenticateToken, getTasksByStatus); // Filtering by status query
app.post('/tasks', authenticateToken, addTask); // Create new task
app.patch('/tasks/:id', authenticateToken, updateTask); // New route for updating tasks
app.delete('/tasks/:id', authenticateToken, deleteTask); // Deleting task




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