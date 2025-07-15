const Product = require('../models/products');

module.exports = class productController {
    static async showProducts(req, res) {
        //utilizando os metodos do mongoose que puxa todos os dados da
        //collection sem where
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

        //criando um novo item do banco
        const product = new Product({ name, image, price, description });

        //utilziando o metodo save que já existe da biblioteca do mongoose
        await product.save();

        //mandando de volta para a tela inicial
        res.redirect('/');
    };

    static async getProduct(req, res) {
        const id = req.params.id;

        //utilizando o metodo findById que encontra um item pelo id, e o lean()
        //que le o arquivo e trás seus dados
        const product = await Product.findById(id).lean();

        res.render('oneProduct', { product });
    };

    // static async removeProduct(req, res) {
    //     const id = req.params.id;

    //     await Product.remove(id);

    //     res.redirect('/');
    // };

    // static async editProduct(req, res) {
    //     const id = req.params.id;

    //     const product = await Product.getProductById(id);

    //     res.render('editProduct', { product: product });
    // };

    // static async edit(req, res) {
    //     const id = req.body.id;
    //     const name = req.body.name;
    //     const image = req.body.image;
    //     const price = req.body.price;
    //     const description = req.body.description;

    //     const product = new Product(name, image, price, description);

    //     await product.editing(id);

    //     res.redirect('/');
    // }
};