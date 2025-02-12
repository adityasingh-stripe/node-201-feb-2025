const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DEV_DB_URI);
    console.log("DB connected!");
  } catch (error) {
    console.log("Error connecting to the database!", error);
  }
};

module.exports = connectDB;
