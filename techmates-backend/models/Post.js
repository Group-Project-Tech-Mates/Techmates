// routes/post.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Import the Post model
const User = require('../models/User'); // Import the User model to validate the user ID

// Get all posts
router.get('/', async (req, res) => {
  try {
    // Populate the user field to include user information in the response
    const posts = await Post.find().populate('user', 'username email'); // Only include username and email
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err.message);
    res.status(500).json({ message: 'Server error while fetching posts' });
  }
});

// Create a new post
router.post('/', async (req, res) => {
  const { user, content, image } = req.body;

  try {
    // Validate that the user exists
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const post = new Post({
      user: existingUser._id, // Reference the user ID
      content,
      image,
    });

    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error('Error creating post:', err.message);
    res.status(400).json({ message: 'Error creating post' });
  }
});

module.exports = router;