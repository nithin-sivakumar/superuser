const mongoose = require('mongoose');
/**
 * Mongoose schema definition for the user model.
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: [true, `Please enter the email`]
  },
  password: {
    type: String
  },
  age: {
    type: Number
  }
});
/**
 * Mongoose model for the user schema.
 */
const user = mongoose.model('user', userSchema);

module.exports = user;