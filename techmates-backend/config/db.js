// techmates-backend/config/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/techmates', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));