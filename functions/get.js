const User = require("../model/user");
const mongoose = require("mongoose");
const { establishConnection } = require("./config");

async function get() {
  try {
    // Reusing the existing connection
    const db = mongoose.connection;

    if (db.readyState !== 1) {
      // Connection is not open, try to reconnect
      establishConnection();
    }

    const users = await User.find();
    // console.log(users);
    return users;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  get,
};
