const conn = require('../db/conn');

class Product {
    constructor(name, price, description){

        //definindo oque precisa ser passado para criar o objeto
        this.name = name;
        this.price = price;
        this.description = description;

    }

    //criando o metodo de salva os elementos no banco
    async save(){
        //conectando com o banco, na collection products e usando o metodo de
        //inserir um dado
        //OBS: se não existir a collection, ele cria automáticamente
        const products = await conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
        });

        return products
    };

}

module.exports = Product;