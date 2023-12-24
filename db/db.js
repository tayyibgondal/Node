const mongoose = require('mongoose');

// Get the connection URI
uri = "mongodb+srv://tayyib:123@cluster0.qmijazu.mongodb.net/NodeApi?retryWrites=true&w=majority";

// Connect to database
mongoose
.connect(uri)
.then(() => {
    console.log("Connected to mongodb");
})
.catch((e) => {
    console.log("Error while connecting to database...");
})
