//nessa aula vamos aprender a conectar nosso banco de dados com o mongodb
//vamos realizar essa conexão dentro do arquivo conn.js que vai ficar dentro da
//pasta db

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
//somente de chamar a conexão, ele já conecta, pois o arquivo roda a função run
//como deixamos lá
const conn = require('./db/conn');

//importando rota
const productsRoutes = require('./routes/productsRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/', productsRoutes);

app.listen(port);