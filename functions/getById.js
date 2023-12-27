const mongoose = require("mongoose");
const { establishConnection } = require("./config");
const User = require("../model/user");

async function getById(userId) {
  try {
    const db = mongoose.connection;

    if (db.readyState !== 1) {
      // Connection is not open, try to reconnect
      await establishConnection();
    }

    const result = await User.findById(userId);
    if (!result) {
      console.log(`User not found with ID: ${userId}`);
      return null;
    }
    console.log(`User found: ${result}`);
    return result;
  } catch (err) {
    console.error(`Error getting user by ID: ${err}`);
    throw err;
  }
}

module.exports = {
  getById,
};
