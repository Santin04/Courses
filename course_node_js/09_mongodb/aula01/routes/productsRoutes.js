const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para exibir todos os produtos
router.get('/', (req, res) => {productController.showProducts(req, res);});
// Rota para a página de criação de um novo produto
router.get('/create', (req, res) => {productController.createProduct(req, res);});
// Rota que envia o novo produto para o banco
router.post('/create', (req, res) => {productController.createProductPost(req, res);});

module.exports = router;