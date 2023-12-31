const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const { cloudinary } = require('../../cloudinary');

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
      let imageUrl = ''; // Initialize imageUrl as an empty string

      if (req.body.image) {
        // If req.body.image exists, proceed with uploading
        const uploadResponse = await cloudinary.v2.uploader.upload(
          req.body.image,
          {
            folder: 'bizconnect',
            use_filename: true,
          }
        );
        imageUrl = uploadResponse.url;
      }

      // Acquire user from User model through id (from token), excluding password.
      const user = await User.findById(req.user.id).select('-password');

      const newpost = new PublicPost({
        ...req.body,
        image: imageUrl,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        user: req.user.id,
      });
      await newpost.save();
      res.json(newpost);
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

// @route   DELETE api/publicposts/:id
// @desc    Delete post by id
// @access  Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await PublicPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    //Check if Logged in User is owner of post
    //post.user type: ObjectId
    //req.user.id type: String

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Use deleteOne() directly on the post object
    await post.deleteOne();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error.');
  }
});

// @route   PUT api/publicposts/like/:id
// @desc    Like a post
// @access  Private

router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await PublicPost.findById(req.params.id);

    //Check if post has been liked already.
    //Checking if current user liking is equal to the logged in user.
    const checkLike =
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0;

    if (checkLike) {
      return res.status(400).json({ msg: 'Post already liked.' });
    }

    //Push user to beginning of likes array.
    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

// @route   PUT api/publicposts/unlike/:id
// @desc    Unlike a post
// @access  Private

router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await PublicPost.findById(req.params.id);

    //Check if post has been unliked already.
    //Checking if current user unliking is equal to the logged in user.
    const checkLike =
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0;

    if (checkLike) {
      return res.status(400).json({ msg: 'Post has not been liked.' });
    }

    //Delete user from likes array.

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

// @route   POST api/publicposts/comment/:id
// @desc    Comment on a post
// @access  Private

router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    // Extract validation errors, if any
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const post = await PublicPost.findById(req.params.id);

      //Create comment obj with params to be displayed
      const newComment = {
        text: req.body.text,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        user: req.user.id,
      };

      //Add new comment to the front of the commments array.
      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
);

// @route   POST api/publicposts/comment/:id/:comment_id
// @desc    Delete comment on a post.
// @access  Private

router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await PublicPost.findById(req.params.id);

    //Extract comment otherwise return false.
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist.' });
    }

    //Check if user deleting the comment is the user who made the comment.

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized.' });
    }

    //Find index of comment to be removed.
    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

module.exports = router;
