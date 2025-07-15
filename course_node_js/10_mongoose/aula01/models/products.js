//importando o mongoose e o schema para podermos criar nossa colection
const mongoose = require('mongoose');
const { Schema } = mongoose;

//configurando a collection que vamos interagir através do front end, sendo o
//primeiro parâmetro 'Product' que é o nome da collection
const Product = mongoose.model('Product', new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}))

//exportando o produto para podermos usa-lo para adicionar, editar e excluir
//os itens do banco dessa collection
module.exports = Product;