//imoprtar o mongo para realizar a conexão
const { MongoClient } = require('mongodb');

//definindo aonde vamos conectar, o localhost é o padrão do mongo em testes
//locais, e depois do / é o nome do banco, caso o banco não exista ele cria
//automaticamente
const uri = "mongodb://localhost:27017/nodemongo";

//criando a classe da conexão com o banco
const client = new MongoClient(uri);

//conectando com o banco
//função assincrona por conta que quando for conectar com o banco não é
//instantâneo
async function run() {
    try {
        await client.connect();
        console.log('Conectado com sucesso');
    } catch (err) {
        console.log('Erro ao conectar com o banco');
    }
};

//rodando a função para quando quem importar a class client, o banco já vi
//conectado
run()

//exportando o client para poder usar em outros arquivos
module.exports = client;