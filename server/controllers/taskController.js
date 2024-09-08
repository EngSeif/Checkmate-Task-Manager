const { client } = require('../config/db');
require('dotenv').config();



const addTask = async (req, res) => {
    const { title, description, priority } = req.body;
    const userId = req.user.id; // Assuming req.user contains the authenticated user's ID

    try {
        const newTask = await client.query(
            `INSERT INTO tasks (title, description, priority, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, description, priority, userId]
        );

        res.status(201).json({ task: newTask.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


module.exports = { addTask };