const mongoose = require("mongoose");

let MONGO_URL;
let ONLINE = false;

const config = (mongoUrl) => {
  try {
    MONGO_URL = String(mongoUrl);
    console.log(`Parsed and stored MONGO_URL successfully`);
    return;
  } catch (err) {
    console.log(err);
  }
};

async function establishConnection() {
  console.log(`Attempting to connect to ${MONGO_URL}`);
  mongoose.connect(MONGO_URL);

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.log(err);
    ONLINE = false; // Set ONLINE to false on connection error
  });

  db.once("open", () => {
    console.log(`Established connection to Database successfully`);
    ONLINE = true;
  });

  db.on("disconnected", () => {
    console.log("Lost connection to the database");
    ONLINE = false;
  });
}

const checkConfig = () => {
  return ONLINE;
};

const getMongoUrl = () => {
  return MONGO_URL;
};

module.exports = {
  config,
  getMongoUrl,
  checkConfig,
  establishConnection,
};
