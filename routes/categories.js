const express = require('express');
const categoryController = require('../controllers/category');
const router = express.Router();

router.get("", categoryController.getCategories);  
router.get('/:id', categoryController.getCategory);
router.post("", categoryController.createCategory);
router.put("/:id",  categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;