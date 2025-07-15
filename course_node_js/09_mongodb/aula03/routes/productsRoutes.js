const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.showProducts);
router.get('/create', productController.createProduct);
router.get('/product/:id', productController.getProduct);
//crinaod a rota que vai na tela para editar o item
router.get('/edit/:id', productController.editProduct);
//criando a rota que vai realizar a edição do item
router.post('/edit', productController.edit);
//criando a rota que vai para remover o item
router.post('/remove/:id', productController.removeProduct);
router.post('/create', productController.createProductPost);

module.exports = router;