const { client } = require('../config/db');
const bcrypt = require('bcrypt');




const registerUser = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await client.query(
            `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
            [username, email, hashedPassword]
        );
        console.log("User Created");
        console.log(newUser.rows[0]);
        res.status(201).json({ user: newUser.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}


module.exports = { registerUser };