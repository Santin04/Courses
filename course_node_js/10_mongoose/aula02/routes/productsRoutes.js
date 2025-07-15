const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.showProducts);
router.get('/create', productController.createProduct);
router.get('/product/:id', productController.getProduct);
// router.get('/edit/:id', productController.editProduct);
// router.post('/edit', productController.edit);
// router.post('/remove/:id', productController.removeProduct);
router.post('/create', productController.createProductPost);

module.exports = router;