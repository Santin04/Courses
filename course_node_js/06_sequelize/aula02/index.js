//nesse projeto vamos aprender a como mandar dados para o banco, para isso é necessário
//uma tela aonde o usuário vai preencher o formulário e também vamos aprender a puxar dados
//do banco de dados, tudo isso usando o sequelize

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const conn = require('./db/conn');
const User = require('./models/User');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', async (req, res) => {

    //função que faz a mesma coisa que o SELECT * e o FROM seria
    //a tabela que foi gerada dentro do arquivo User.js
    const user =  await User.findAll({raw: true});

    console.log(user);

    //passando os dados do banco para o handlebars poder exibir na tela
    //para o usuário ver
    res.render('home', {user: user});
});

//para o usuário acessar o adduser
app.get('/users/create', (req, res) => {
    res.render('adduser');
});

//para quando o usuário mandar os dados do formulário
app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    //deixando como valor boolean que é oque o campo do banco aceita
    if (newsletter === 'on') {
        newsletter = true;
    };

    //Usando metodo que vai inserir dados, passando dados na ordem correta
    //deixar a function async para só mandar o usuário para outra tela quando
    //acabar de mandar tudo para o banco de dados corretamente
    await User.create({ name, occupation, newsletter });

    //após tudo acontecer mandar o usuário para a tela que deseja
    res.redirect('/');

});

conn.sync().then(() => {
    app.listen(port);
}).catch(err => {console.log('Erro ao conectar')})