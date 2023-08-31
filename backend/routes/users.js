const express = require('express');
const router = express.Router(); // Create an instance of Express router

// @route   GET api/users
// @desc    Test Route
// @access  Public

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
