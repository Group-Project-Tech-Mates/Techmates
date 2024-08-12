const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;