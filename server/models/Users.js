const mongoose = require('mongoose');
// Define the schema for the Item model
const UserSchema = new mongoose.Schema({ name: String ,email:String,age:Number});
// Create the Item model using the schema
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;