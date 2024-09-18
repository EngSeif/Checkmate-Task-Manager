const express = require('express');
const router = express.Router();
const { registerUser, loginUser,userData } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/data', authenticateToken, userData);

module.exports = router;
