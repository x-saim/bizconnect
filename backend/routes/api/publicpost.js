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

// @route   GET api/publicposts
// @desc    Get all posts
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    //sorted by most recent post
    const posts = await PublicPost.find().sort({ date: -1 });

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

// @route   GET api/publicposts/:id
// @desc    Get post by id
// @access  Private

router.get('/:id', auth, async (req, res) => {
  try {
    const post = await PublicPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.status(500).send('Server Error.');
  }
});

module.exports = router;
