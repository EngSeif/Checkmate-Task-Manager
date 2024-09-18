const express = require('express');
const router = express.Router();
const { addTask, getTasks, updateTask, deleteTask, getTasksByPriority, getTasksByStatus } = require('../controllers/taskController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/', authenticateToken, getTasks); // Get all user tasks
router.get('/filter', authenticateToken, getTasksByPriority); // Filtering by priority using query
router.get('/status', authenticateToken, getTasksByStatus); // Filtering by status query
router.post('/', authenticateToken, addTask); // Create new task
router.patch('/:id', authenticateToken, updateTask); // Route for updating tasks
router.delete('/:id', authenticateToken, deleteTask); // Deleting task

module.exports = router;
