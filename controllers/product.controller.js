const Product = require("../models/product.model");

// READ Product List by VideoID
const getProductListByVideoID = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const products = await Product.find(
      { videoID: videoID },
      "_id title description imageUrl link price"
    );
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: "Server Error" });
  }
};

// READ All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate(
      "videoID",
      "_id title description thumbnailUrl"
    );
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// READ Single Product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "videoID",
      "_id title description thumbnailUrl"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE Product
const createProduct = async (req, res) => {
  try {
    const { videoID, title, description, imageUrl, link, price } = req.body;
    const newProduct = new Product({
      videoID,
      title,
      description,
      imageUrl,
      link,
      price,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE Product
const updateProduct = async (req, res) => {
  try {
    const { videoID, title, description, imageUrl, link, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { videoID, title, description, imageUrl, link, price },
      { new: true }
    ).populate("videoID", "_id title description thumbnailUrl");
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE Product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(
      req.params.id
    ).populate("videoID", "_id title description thumbnailUrl");
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProductListByVideoID,
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
