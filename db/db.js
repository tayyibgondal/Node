const mongoose = require('mongoose');
require("dotenv").config();

// Get the connection URI
uri = process.env.MONGO_URL;

// Connect to database
mongoose
.connect(uri)
.then(() => {
    console.log("Connected to mongodb");
})
.catch((e) => {
    console.log("Error while connecting to database...");
})
