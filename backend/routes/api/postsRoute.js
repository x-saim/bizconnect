// This file is created by Mitali
const express = require('express');
const router = express.Router();
const { cloudinary } = require('../../cloudinary');

const Post = require('../../models/postModel');
const User = require('../../models/User');
// const Post = require('../../models/PublicPost.js');
//const PublicPost = require('../../models/PublicPost');

// router.post('/addpost', async (req, res) => {
//   try {
//     const uplodeResponse = await cloudinary.v2.uploader.upload(req.body.image, {
//       folder: 'bizconnect',
//       use_filename: true,
//     });
//     req.body.image = uplodeResponse.url;
//     const newpost = new Post(req.body);
//     await newpost.save();
//     res.send('PublicPost added successfully');
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json(error);
//   }
// });

router.get('/getallposts', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', ['firstname', 'lastname', 'avatar']) // Populate the user field with the required fields
      .sort({ date: -1 });

    //const posts = await PublicPost.find().sort({ date: -1 }).populate('user');
    console.log(posts);
    res.send(posts);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
