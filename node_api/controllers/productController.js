const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while reading data!" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findById(product_id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while fetching one record" });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res
      .status(200)
      .json({ msg: "Data inserted successfully", product: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error while creating product" });
  }
};

const updateProduct = async (req, res) => {
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
};

const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findByIdAndDelete(product_id);
    res.status(200).json({ message: "Successfully delted", product: product });
  } catch (error) {
    res.status(500).json("Internal server error while deleting the record...");
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
