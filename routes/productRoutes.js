const express = require('express');
const Product = require('../models/productModel');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get all records
router.get("/products", getProducts);

// Get single record
router.get("/products/:product_id", getProduct);

// Create a record
router.post("/create", createProduct);

// Update a record
router.put("/products/:product_id", updateProduct);

// Delete a record
router.delete("/products/:product_id", deleteProduct);

module.exports = router;