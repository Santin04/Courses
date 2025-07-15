//vamos realizar a conexão com o banco de dados usando o ODM mongoose, com isso
//vamos começar do 0 o arquivo conn.js, também vamos aprender a usar o mongoose
//dentro dos arquivos do models
//para instalar ele, basta usar o comando npm i mongoose

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

//o código ainda não funcina corretamente por conta que não foi ajustado ainda
//o productController, ele está ainda como se o Product.js fosse o de antes
//de acordo com as aulas vamos alterar aos poucos todas as funções do
//controller