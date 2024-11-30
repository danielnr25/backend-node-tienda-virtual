const express = require('express');
const ProductController = require('../controllers/productController');
const router = express.Router();

// Obtener todos los productos
router.get('/', ProductController.getAllProducts);

//obtener un producto por ID
router.get('/:id', ProductController.getProductById);

// registrar nuevo producto
router.post('/', ProductController.createProduct);

// actualizar un producto
router.put('/:id', ProductController.updateProduct);

// eliminar un producto
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
