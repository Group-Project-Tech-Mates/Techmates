const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/Posts'); 
const userRoutes = require('./routes/RouteUser');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes); 
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/techmates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5001, () => {
  console.log('Server running on port 5001');
});