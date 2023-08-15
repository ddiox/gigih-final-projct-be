require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const connectDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDatabase;
