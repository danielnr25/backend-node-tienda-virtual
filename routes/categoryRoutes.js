const express = require('express');
const CategoryController = require('../controllers/categoryController');
const router = express.Router();

//obtener todas las categorias
router.get('/',CategoryController.getAllCategories);

//obtener una categoria por su ID
router.get('/:id',CategoryController.getCategoryById)

//crear una nueva categoria
router.post('/',CategoryController.createCategory)

//editar una categoria
router.put('/:id',CategoryController.updateCategory)

//eliminar una categoria
router.delete('/:id',CategoryController.deleteCategory)


module.exports = router;