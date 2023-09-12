// This file is created by Mitali
const express = require('express');
const router = express.Router();
const { cloudinary } = require('../../cloudinary');
const Post = require('../../models/postModel');

router.post('/addpost', async (req, res) => {
  try {
    const uplodeResponse = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: 'bizconnect',
      use_filename: true,
    });
    req.body.image = uplodeResponse.url;
    const newpost = new Post(req.body);
    await newpost.save();
    res.send('Post added successfully');
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
