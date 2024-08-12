// techmates-backend/models/Project.js
const mongoose = require('mongoose');
const Project = require('../models/Project');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: String
    }
  ],
  advice: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      advice: String
    }
  ]
});

module.exports = mongoose.model('Project', projectSchema);