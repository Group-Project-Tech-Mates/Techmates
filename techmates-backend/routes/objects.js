// backend/routes/objects.js
const express = require('express');
const router = express.Router();

// Example objects data
const objects = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
  { id: 3, name: 'Object 3' },
];

// Get all objects
router.get('/objects', (req, res) => {
  res.json(objects);
});

module.exports = router;