const mongoose = require("mongoose");

// Set-up dotenv package
require("dotenv").config();

// @notice {connectDb} connects to MongoDB Atlas.
// @dev {connectDb} MongoDB URL must be created.
async function connectDb() {
    await mongoose.connect(
        `mongodb+srv://root:${process.env.MONGODB_PW}@cluster0.hxfseci.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to database...");
}

module.exports = connectDb;
