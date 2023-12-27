const mongoose = require("mongoose");
const { establishConnection } = require("./config");
const User = require("../model/user");

async function create(data) {
  try {
    const db = mongoose.connection;

    if (db.readyState !== 1) {
      // Connection is not open, try to reconnect
      await establishConnection();
    }

    const newUser = new User(data);
    const result = await newUser.save();
    console.log(`User created successfully: ${result}`);
    return result;
  } catch (err) {
    console.error(`Error creating user: ${err}`);
    throw err;
  }
}

module.exports = {
  create,
};
