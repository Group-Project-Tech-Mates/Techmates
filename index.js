const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./techmates-backend/routes/RouteUser'); 
console.log("Before DB connection");
require('./techmates-backend/config/db'); // database configuration
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

app.use(express.json()); 
console.log("JSON Middleware added");

app.use('/api/users', userRoutes); 
console.log("User routes added");

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("After app.listen");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
