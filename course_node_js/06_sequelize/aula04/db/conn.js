const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('conectado ao banco de dados');
} catch(err) {
    console.log('erro ao conectar com o banco de dados');
};

module.exports = sequelize