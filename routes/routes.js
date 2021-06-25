const express = require('express');

const {showProduct,showProductById,createProduct,updateProduct,deleteProduct} = require('../src/controllers/productController');
const validators = require('../src/validators/validator')
const router = express.Router();

 
// Get All Product
router.get('/products', showProduct);
 
// Get Single Product
router.get('/products/:id', showProductById);
 
// Create New Product
router.post('/products', validators.productInfo,validators.result,createProduct);
 
// Update Product
router.put('/products/:id', updateProduct);
 
// Delete Product
router.delete('/products/:id', deleteProduct);
 
module.exports= router;