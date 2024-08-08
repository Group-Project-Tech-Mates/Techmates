const mongoose = require('mongoose');
const Post = require('./models/Post'); // Correct path
const User = require('./models/User'); // Correct path

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/techmates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log('MongoDB connected');

  // Clear existing data
  await Post.deleteMany({});
  await User.deleteMany({});

  // Create sample users
  const user1 = new User({
    username: 'john_doe',
    password: 'password123',
    email: 'john@example.com',
  });

  const user2 = new User({
    username: 'jane_doe',
    password: 'password123',
    email: 'jane@example.com',
  });

  await user1.save();
  await user2.save();

  // Create sample posts
  const post1 = new Post({
    user: user1._id,
    content: 'Need help with 404error!',
    image: '/images/404error.png',
    createdAt: new Date(),
  });

  const post2 = new Post({
    user: user2._id,
    content: 'Seeking help with thunderclient api testing.',
    image: '/images/sitecantbereached.png',
    createdAt: new Date(),
  });

  await post1.save();
  await post2.save();

  console.log('Sample data inserted');
  mongoose.connection.close();
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});