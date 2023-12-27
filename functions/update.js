const mongoose = require("mongoose");
const { establishConnection } = require("./config");
const User = require("../model/user");

async function update(userId, updatedData) {
  try {
    const db = mongoose.connection;

    if (db.readyState !== 1) {
      // Connection is not open, try to reconnect
      await establishConnection();
    }

    const result = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    if (!result) {
      console.log(`User not found with ID: ${userId}`);
      return null;
    }
    // console.log(`User updated successfully: ${result}`);
    return result;
  } catch (err) {
    console.error(`Error updating user: ${err}`);
    throw err;
  }
}

module.exports = {
  update,
};
