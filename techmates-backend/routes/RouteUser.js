

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userController = require('../controllers/userController'); // Ensure correct path

router.post('/signup', userController.createUser);

router.post('/signin', userController.signInUser);

router.post('/create', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;