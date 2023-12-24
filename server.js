const express = require("express");
const db = require("./db/db");
const Product = require("./models/productModel");

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Get all records
app.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while reading data!" });
  }
});

// Get single record
app.get("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findById(product_id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while fetching one record" });
  }
});

// Create a record
app.post("/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res
      .status(200)
      .json({ msg: "data inserted successfully", product: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while creating product" });
  }
});

// Update a record
app.put("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findByIdAndUpdate(product_id);
    const updated_product = await Product.findById(product_id);
    res
      .status(200)
      .json({ message: "Update successful", product: updated_product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while updating the record!" });
  }
});

// Delete a record
app.delete("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findByIdAndDelete(product_id);
    res.status(200).json({ message: "Successfully delted", product: product });
  } catch (error) {
    res.status(500).json("Internal server error while deleting the record...");
  }
});

app.listen(3000, () => console.log("Express server listening on port 3000..."));
