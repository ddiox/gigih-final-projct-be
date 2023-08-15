const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

// READ Product List by VideoID
router.get(
  "/videos/:videoID/products",
  productController.getProductListByVideoID
);

// READ All Products
router.get("/products", productController.getAllProducts);

// READ Single Product
router.get("/products/:id", productController.getProductById);

// CREATE Product
router.post("/products", productController.createProduct);

// UPDATE Product
router.put("/products/:id", productController.updateProduct);

// DELETE Product
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
