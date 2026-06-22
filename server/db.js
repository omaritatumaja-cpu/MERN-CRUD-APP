const mongoose = require('mongoose');

const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // if the connection is successful, it will log "MongoDB connected" otherwise it will throw an error
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;