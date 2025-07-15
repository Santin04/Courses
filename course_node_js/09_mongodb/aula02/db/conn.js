const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/nodemongo";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Conectado com sucesso');
    } catch (err) {
        console.log('Erro ao conectar com o banco');
    }
};

run();

module.exports = client;