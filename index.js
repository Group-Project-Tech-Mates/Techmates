const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./techmates-backend/routes/RouteUser'); 
console.log("Before DB connection");
require('./techmates-backend/config/db'); // database configuration

const app = express();
console.log("After DB connection");

app.use(express.json()); // Middleware 
console.log("JSON Middleware added");

app.use('/api/users', userRoutes); 
console.log("User routes added");

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("After app.listen");
