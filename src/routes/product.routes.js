const express = require("express");
const {
  allProducts,
  productById,
} = require("../controllers/product.controller");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/", verifyToken, allProducts);
router.get("/:productId", productById);

module.exports = router;
