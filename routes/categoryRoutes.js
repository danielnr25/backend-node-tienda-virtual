const express = require('express');
const CategoryController = require('../controllers/categoryController');
const router = express.Router();

//obtener todas las categorias
router.get('/',CategoryController.getAllCategories);

module.exports = router;