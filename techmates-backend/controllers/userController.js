const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    });
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.signInUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send({ message: 'Sign in successful', user });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// const User = require('../models/User');
// const bcrypt = require('bcrypt'); // Ensure bcrypt is installed

// exports.createUser = async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const newUser = new User({
//       username: req.body.username,
//       password: hashedPassword,
//       email: req.body.email
//     });
//     const savedUser = await newUser.save();
//     res.status(200).send(savedUser);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// exports.signInUser = async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (user && await bcrypt.compare(req.body.password, user.password)) {
//       res.status(200).send({ message: 'Sign in successful', user });
//     } else {
//       res.status(401).send({ message: 'Invalid credentials' });
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// exports.updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).send(updatedUser);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).send({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };