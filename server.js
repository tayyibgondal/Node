require("dotenv").config();
const express = require("express");
const db = require("./db/db");
const productRoute = require("./routes/productRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Accessing variables from the env file
const PORT = process.env.PORT || 3000;

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", productRoute);

app.get("/", (req, res) => {
    throw new Error("Fake error");
    // res.send("HELLOOOOO!!!")
});

app.get("/hi", (req, res) => {
    throw new Error("Fake error");
    // res.send("HELLOOOOO!!!")
});

// This will be invoked only if  error occurs in one of the previous functions
app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Express server listening on: http://localhost:${PORT}...`)
);
