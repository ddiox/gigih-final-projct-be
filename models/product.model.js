const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  videoID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
