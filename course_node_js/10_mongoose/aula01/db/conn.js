//importando o ODM mongoose
const mongoose = require('mongoose');

//criando a função que realiza a conexão com o banco
async function main() {
    //aguardar a conexão com o mongodb ser realizada com sucesso
    //nesse caso vamos tentar conectar com o banco que chama 'mongoose'
    //caso ele não exista, automaticamente vai criar
    await mongoose.connect('mongodb://localhost:27017/mongoose');

    console.log('conectado com o banco de dados');
};

//executando a função que conecta com o banco de dados e exibindo no terminal
//uma mensagem de erro caso falhe a conexão
main().catch((err) => console.log('Erro ao conectar com o banco'));

//exportando para assim que executar o index.js já estabelecer a conexão com
//o banco
module.exports = mongoose;