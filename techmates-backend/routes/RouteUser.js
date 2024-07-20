const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Correct path

console.log('Registering routes...');

router.post('/create', (req, res, next) => {
  console.log('POST /create');
  next();
}, userController.createUser);

router.get('/:id', (req, res, next) => {
  console.log('GET /:id');
  next();
}, userController.getUser);

router.put('/:id', (req, res, next) => {
  console.log('PUT /:id');
  next();
}, userController.updateUser);

router.delete('/:id', (req, res, next) => {
  console.log('DELETE /:id');
  next();
}, userController.deleteUser);

module.exports = router;