const express = require('express');
const ProductController = require('../controllers/productController');
const upload = require('../middleware/upload');
const authenticate = require('../middleware/auth');
const router = express.Router();

// Obtener todos los productos
router.get('/', ProductController.getAllProducts);

//obtener un producto por ID
router.get('/:id', ProductController.getProductById);

// registrar nuevo producto
router.post('/',upload.single('image'),ProductController.createProduct);

// actualizar un producto
router.put('/:id',upload.single('image'), ProductController.updateProduct);

// eliminar un producto
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
