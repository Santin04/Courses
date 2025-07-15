const Product = require('../models/products');

module.exports = class productController {
    static async showProducts(req, res) {
        const products = await Product.find().lean();

        res.render('products', { products: products });
    };

    static createProduct(req, res) {
        res.render('createProduct');
    };

    static async createProductPost(req, res) {
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        const product = new Product({ name, image, price, description });

        await product.save();

        res.redirect('/');
    };

    static async getProduct(req, res) {
        const id = req.params.id;

        const product = await Product.findById(id).lean();

        res.render('oneProduct', { product });
    };

    static async removeProduct(req, res) {
        const id = req.params.id;

        //passando o metodo que deleta um elemento, e vamos achar esse elemento
        //através do id
        await Product.deleteOne({ _id: id });

        res.redirect('/');
    };

    static async editProduct(req, res) {
        //pegando o id do produto que vamos permitir o usuário alterar
        const id = req.params.id;

        //pegando os dados dele para deixar dentro dos inputs
        const product = await Product.findById(id).lean();

        //mandando os dados para o fornt end
        res.render('editProduct', { product: product });
    };

    static async edit(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        //passando todos os novos dados para um objeto
        const product = {name, image, price, description};

        //atualizando o produto achando pelo id e passando os novos dados
        await Product.updateOne({ _id: id}, product);

        //redirecionando para a página inicial
        res.redirect('/');
    }
};