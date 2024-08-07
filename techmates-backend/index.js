const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/RouteUser'); 

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/techmates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});