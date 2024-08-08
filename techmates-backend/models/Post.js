const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    username: String,
    email: String
  },
  content: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);