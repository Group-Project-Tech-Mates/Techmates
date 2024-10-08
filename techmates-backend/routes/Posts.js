const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); // Correct relative path

// Route to create a new post
router.post('/api/posts', postController.createPost);

// Route to get all posts
router.get('/api/posts', postController.getPosts);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post'); 
// const postController = require('../controllers/postController');

// // Get all posts
// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Creating a new post
// router.post('/', async (req, res) => {
//   const post = new Post({
//     user: req.body.user,
//     content: req.body.content,
//     image: req.body.image
//   });

//   try {
//     const newPost = await post.save();
//     res.status(201).json(newPost);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;