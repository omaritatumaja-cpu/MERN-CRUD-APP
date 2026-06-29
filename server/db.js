const mongoose = require('mongoose');
const dns = require('dns');

// Force DNS resolution to work with the SRV record
dns.setServers(['8.8.8.8', '1.1.1.1']);

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

