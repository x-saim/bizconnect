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

module.exports = router;
