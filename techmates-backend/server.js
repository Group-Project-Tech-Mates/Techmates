const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const Post = require('./models/Post');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const uri = process.env.MONGODB_URI || "mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Error connecting to MongoDB Atlas:', err.message));

// API Routes

// Route to get posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to create a new post
app.post('/api/posts', async (req, res) => {
  const { userId, content, image } = req.body;

  try {
    const user = userId ? await User.findById(userId) : null;

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const post = new Post({
      user: user._id, 
      content,
      image, // Include image field
      createdAt: new Date(),
    });

    await post.save();

    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating post:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Route to handle user sign-up
app.post('/api/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    await user.save();

    res.status(201).json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error('Sign-up error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle user sign-in
app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error('Error during sign-in:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});