const { client } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await client.query(
            `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
            [username, email, hashedPassword]
        );
        console.log("user created");
        console.log(newUser.rows[0]);
        res.status(201).json({ user: newUser.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        // Check if the user exists
        const user = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(400).json({ error: 'Email Not Found' });
        }

        // Check the password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Wrong Password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { registerUser, loginUser };