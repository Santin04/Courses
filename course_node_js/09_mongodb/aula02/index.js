//Nessa aula vamos aprender a como puxar dados do banco de dados para podermos
//exibir na tela para o usuário, vamos puxar dados, tanto em conjunto e também
//de forma individual

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const conn = require('./db/conn');

const productsRoutes = require('./routes/productsRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/', productsRoutes);

app.listen(port);