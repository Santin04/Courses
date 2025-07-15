const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res) => {productController.showProducts(req, res);});
router.get('/create', (req, res) => {productController.createProduct(req, res);});
//criando a rota em que vai visualizar somente um produto
router.get('/product/:id', (req, res) => {productController.getProduct(req, res);});
router.post('/create', (req, res) => {productController.createProductPost(req, res);});

module.exports = router;