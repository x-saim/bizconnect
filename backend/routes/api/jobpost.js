const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const JobPost = require('../../models/JobPost');

// @route   POST api/jobposts
// @desc    Create a job post
// @access  Private

router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required').not().isEmpty(),
      check('title', 'Title is requried').not().isEmpty(),
      check('company', 'Company is requried').not().isEmpty(),
      check('description', 'Job Description is requried').not().isEmpty(),
      check('requirements', 'Please include job requirements').not().isEmpty(),
      check('location', 'Job location is requried').not().isEmpty(),
      check('employmentType', 'The type of employment is requried')
        .not()
        .isEmpty(),
      check('salary', 'Salary is requried').not().isEmpty(),
      check('contactEmail', 'contactEmail is requried').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Extract validation errors, if any
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //Setup Post obj structure
      const newJobPost = new JobPost({
        ...req.body,
        user: req.user.id,
      });

      const jobPost = await newJobPost.save();

      res.json(jobPost);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error.');
    }
  }
);

// @route   GET api/jobposts
// @desc    Get all job posts
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    //sorted by most recent job post
    const jobPosts = await JobPost.find().sort({ date: -1 });

    res.json(jobPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error.');
  }
});

// @route   GET api/jobposts/:id
// @desc    Get job post by id
// @access  Private

router.get('/:id', auth, async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);

    if (!jobPost) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(jobPost);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.status(500).send('Server Error.');
  }
});

// @route   DELETE api/jobposts/:id
// @desc    Delete job post by id
// @access  Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);

    if (!jobPost) {
      return res.status(404).json({ msg: 'Job posting not found.' });
    }

    //Check if Logged in User is owner of post
    //jobPost.user type: ObjectId
    //req.user.id type: String

    if (jobPost.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized.' });
    }

    // Use deleteOne() directly on the job post object
    await jobPost.deleteOne();

    res.json({ msg: 'Job posting removed.' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job posting not found.' });
    }
    res.status(500).send('Server Error.');
  }
});

module.exports = router;
