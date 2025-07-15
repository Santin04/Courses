const { DataTypes } = require('sequelize');
const db = require('../db/conn');

//aqui nesse caso vamos importar também o User, para podermos passar ele na
//hora que for realizar a conexão entre tabelas
const User = require('./User');

//criando a tabela e as colunas dela
const Address = db.define('Address', {
    //configurando as colunas da tabela do banco
    street: {
        type: DataTypes.STRING,
        require: true
    },
    number: {
        type: DataTypes.STRING,
        require: true
    },
    city: {
        type: DataTypes.STRING,
        require: true
    }
});

//dizendo que um usuário pode ter vários endereços
User.hasMany(Address)

//nesse código abaixo estou criando a conexão entre as duas tabela
//nessa caso a conexão diz que um endereço pertence a um usuário
//com isso ele vai criar automaticamente uma coluna que faz menção ao id do usuário
Address.belongsTo(User);

module.exports = Address;