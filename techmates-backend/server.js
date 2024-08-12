const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Post = require('./models/Post');
const User = require('./models/User');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); 

// MongoDB connection using MongoDB Node.js driver
const uri = "mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");

    // If you still need to use Mongoose for models:
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', async () => {
      console.log('Mongoose connected to MongoDB Atlas');

      // Clear existing data
      await Post.deleteMany({});
      await User.deleteMany({});

      // Create sample users
      const user1 = new User({
        username: 'john_doe',
        password: await bcrypt.hash('password123', 10),
        email: 'john@example.com',
      });

      const user2 = new User({
        username: 'jane_doe',
        password: await bcrypt.hash('password123', 10),
        email: 'jane@example.com',
      });

      await user1.save();
      await user2.save();

      // Create sample posts
      const post1 = new Post({
        user: user1._id,
        content: 'Need help with 404 error!',
        createdAt: new Date(),
      });

      const post2 = new Post({
        user: user2._id,
        content: 'Seeking help with Thunderclient API testing.',
        createdAt: new Date(),
      });

      await post1.save();
      await post2.save();

      console.log('Sample data inserted');
    });

    mongoose.connection.on('error', (err) => {
      console.log('Mongoose connection error:', err);
    });

  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();

// API Routes

// Route to get posts
app.get('/models/Posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new post
app.post('/api/Posts', async (req, res) => {
  const { userId, content } = req.body;

  try {
    // Check if userId is provided and fetch the user
    const user = userId ? await User.findById(userId) : null;

    // Create a new post with or without user association
    const post = new Post({
      user: user ? user._id : null, // If user is found, associate it; otherwise, null
      content,
      createdAt: new Date(),
    });

    // Save the post to the database
    await post.save();

    // Return the created post as the response
    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating post:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Route to handle user sign-up
app.post('/api/SignUp', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    await user.save();

    // Return the user data (excluding the password)
    res.status(201).json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error('Sign-up error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle user sign-in
app.post('/api/SignIn', async (req, res) => {
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
    console.error('Error during sign-in:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// const express = require('express');
// // const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');  // Import bcrypt for password hashing
// const Post = require('./models/Post');
// const User = require('./models/User');

// const app = express();
// const PORT = process.env.PORT || 5001;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// // Middleware
// app.use(cors());
// app.use(express.json()); 

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/techmates', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // mongoose.connection.on('connected', () => {
// //   console.log('MongoDB connected');
// // });

// // mongoose.connection.on('error', (err) => {
// //   console.log('MongoDB connection error:', err);
// // });

// // API Routes

// // Route to get posts
// app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find().populate('user');
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Route to create a new post
// app.post('/api/posts', async (req, res) => {
//   const { userId, content, image } = req.body;
//   try {
//     const user = await User.findById(userId);
//     const post = new Post({
//       user: user._id,
//       content,
//       image,
//       createdAt: new Date(),
//     });
//     await post.save();
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Route to handle user sign-up
// app.post('/api/signup', async (req, res) => {
//   const { username, password, email } = req.body;

//   try {
//     // Check if the username or email already exists
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username or email already exists' });
//     }

//     // Hash the password before saving the user
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({
//       username,
//       password: hashedPassword,
//       email,
//     });

//     await user.save();

//     // Return the user data (excluding the password)
//     res.status(201).json({ user: { id: user._id, username: user.username, email: user.email } });
//   } catch (err) {
//     console.error('Sign-up error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Route to handle user sign-in
// app.post('/api/signin', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     res.json({ user: { id: user._id, username: user.username, email: user.email } });
//   } catch (err) {
//     console.error('Error during sign-in:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });