const conn = require('../db/conn');

const { ObjectId } = require('mongodb');

class Product {
    constructor(name, image, price, description){

        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;

    };

    async save(){
        const products = await conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description,
        });

        return products
    };

    static async getProducts() {
        const products = await conn.db().collection('products').find().toArray();

        return products;
    };

    static async getProductById(id) {
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id) });

        return product
    };

    //criando o metodo que remove um item através do id
    static async remove(id) {
        //através da conexão, selecionando a collection products e dentor dela
        //deletando um produto por meio do deleteOne
        await conn.db().collection('products').deleteOne({ _id: new ObjectId(id) });

        //retornando nada, apenas para dizer que finalizou o metodo
        return
    };

    //criando o metodo que edita o item através do id
    async editing(id) {

        //conectando com a collection products, dando update em um produto
        //passando o id do produto que queremos editar, passando o set com
        //this, para passar todos os parâmetros do Produto
        await conn.db().collection('products').updateOne({ _id: new ObjectId(id) }, {$set: this});

        return
    }

};

module.exports = Product;