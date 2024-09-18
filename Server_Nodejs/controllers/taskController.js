const { client } = require('../config/db');
const { validateAddedTask, validateUpdatedTask } = require('../validators/validationUtils'); 
require('dotenv').config();



// Getting all user tasks
const getTasks = async (req, res) => {
    const userId = req.user.id;
    
    try {
        const tasks = await client.query(
            `SELECT * FROM tasks WHERE user_id = $1 ORDER BY time_added DESC`,
            [userId]
        );
        res.json(tasks.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};



// Create new task for the user
const addTask = async (req, res) => {
    const userId = req.user.id; 

    // Validate the request body
    const { isValid, message } = validateAddedTask(req.body);
    if (!isValid) return res.status(400).json({ msg: message });

    const { title, description, priority } = req.body;


    try {
        const newTask = await client.query(
            `INSERT INTO tasks (title, description, priority, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, description, priority, userId]
        );
        console.log({addedTask: newTask.rows[0]})
        res.status(201).json({ task: newTask.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};



// Updating task with id param
const updateTask = async (req, res) => {
    const userId = req.user.id; 
    const { id } = req.params; 

    // Validate the request body
    const { isValid, message } = validateUpdatedTask(req.body);
    if (!isValid) return res.status(400).json({ msg: message });
    

    const {description, checked, priority } = req.body; 
    const title = req.body.title || null

    try {
        let result;
        if (title === null) {
            result = await client.query(
                `UPDATE tasks
                 SET description = $1, checked = $2, priority = $3
                 WHERE id = $4 AND user_id = $5
                 RETURNING *`,
                [description, checked, priority, id, userId]
            );
            console.log(result.rows[0]);

        } else{
            result = await client.query(
                `UPDATE tasks
                 SET title = $1, description = $2, checked = $3, priority = $4
                 WHERE id = $5 AND user_id = $6
                 RETURNING *`,
                [title, description, checked, priority, id, userId]
            );
            console.log("condition 1");
        }
        // If no task was updated, return a 404 response
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        res.status(200).json({ task: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete task with id param
const deleteTask = async (req, res) => {
    const userId = req.user.id; 
    const { id } = req.params; 

    try {
        // Delete the task from the database
        const result = await client.query(
            `DELETE FROM tasks
             WHERE id = $1 AND user_id = $2
             RETURNING *`,
            [id, userId]
        );

        // If no task was deleted, return a 404 response
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        res.status(200).json({ msg: 'Task deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get filtered tasks by priority query
const getTasksByPriority = async (req, res) => {
    const userId = req.user.id; 
    const { priority } = req.query; 

    try {
        const result = await client.query(
            'SELECT * FROM tasks WHERE user_id = $1 AND priority = $2 ORDER BY time_added DESC',
            [userId, priority]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'No tasks found with the specified priority' });
        }

        res.status(200).json({ tasks: result.rows });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get  tasks by status query
const getTasksByStatus = async (req, res) => {
    const userId = req.user.id; 
    const { checked } = req.query; 

    try {
        const result = await client.query(
            'SELECT * FROM tasks WHERE user_id = $1 AND checked = $2 ORDER BY time_added DESC',
            [userId, checked]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'No tasks found with the specified status' });
        }

        res.status(200).json({ tasks: result.rows });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


module.exports = { addTask, getTasks, updateTask, deleteTask, getTasksByPriority, getTasksByStatus };