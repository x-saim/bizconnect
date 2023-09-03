const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const PublicPost = require('../../models/PublicPost');

// @route   POST api/publicposts
// @desc    Create a post
// @access  Private

router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    // Extract validation errors, if any
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Acquire user from User model through id (from token), excluding password.
      const user = await User.findById(req.user.id).select('-password');

      //Setup Post obj structure
      const newPublicPost = new PublicPost({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPublicPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
);

module.exports = router;
