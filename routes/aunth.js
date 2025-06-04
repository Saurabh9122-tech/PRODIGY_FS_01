// routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path if needed

// Sample login route
router.post('/login', async (req, res) => {
    res.send("Login route working!");
});

module.exports = router;
