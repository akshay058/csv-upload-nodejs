const mongoose = require("mongoose");
require("dotenv").config();

// Store connection in connectDB and call it in index.js
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected \n");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;