const Post = require('../models/Post'); // Ensure the correct path to your model

// Create a new post
exports.createPost = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required.' });
  }

  const post = new Post({
    content,
    createdAt: new Date(),
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};