const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const fileUpload = require('../middleware/file');


router.get("/:categoryId", productController.getProducts);  
router.get('/:id', productController.getProduct);
router.post("", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;