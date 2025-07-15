//vamos aprender a como enviar um novo item para a collection e como a puxar
//itens do banco de dados sem e com where

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
