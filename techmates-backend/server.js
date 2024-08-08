const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/RouteUser'); // Ensure the path is correct

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/techmates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', userRoutes); // Ensure the prefix matches the Axios URL

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const postRoutes = require('./routes/Posts');
// const userRoutes = require('./routes/RouteUser'); // Import the user routes

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/techmates', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Use the post routes
// app.use('/api/posts', postRoutes);

// // Use the user routes
// app.use('/api', userRoutes);

// app.listen(5001, () => {
//   console.log('Server running on port 5001');
// });