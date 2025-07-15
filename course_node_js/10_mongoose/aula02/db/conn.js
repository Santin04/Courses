const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mongoose');

    console.log('conectado com o banco de dados');
};

main().catch((err) => console.log('Erro ao conectar com o banco'));

module.exports = mongoose;