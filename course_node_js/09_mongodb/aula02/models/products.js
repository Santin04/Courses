const conn = require('../db/conn');

//é necessário importar um do mongodb para poder ler corretamente o id do banco
//pois no mongodb o id é salvo de uma forma diferente

const { ObjectId } = require('mongodb');

class Product {
    constructor(name, image, price, description){

        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;

    }

    async save(){
        const products = await conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description,
        });

        return products
    };

    //criando o metode que tras os produtos do banco de dadpos
    static async getProducts() {
        //conecta com o banco, na collection products, busca todos os dados
        //pois não tem nenhum condição no find e salva todos em uma array
        const products = await conn.db().collection('products').find().toArray();

        //retorna a array com todos os produtos
        return products;
    }

    static async getProductById(id) {
        //puxando o elemento do banco através do id, como o id no mongo db é
        //salvo de uma forma diferente você tem que passar ele junto com o
        //ObjectId
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id) });

        //retornando o produto para poder usar no front end
        return product
    }

}

module.exports = Product;