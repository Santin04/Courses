//agora vamos começar a aprender como usar o sequelize com relacionamento entre tabelas
//vamos criar a tabela de endereço, que vai ser onde vamos armazenar os endereços
//dos users da tabela user e também vamos aprender a como incluir e deletar

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const conn = require('./db/conn');
const User = require('./models/User');
const Address = require('./models/Address');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', async (req, res) => {

    const user = await User.findAll({ raw: true });

    res.render('home', { user: user });
});

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    };

    await User.create({ name, occupation, newsletter });

    res.redirect('/');
});

app.get('/users/edit/:id',  async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ include: Address, where: { id: id } });

    res.render('useredit', { user: user.get({ plain: true }) });
});

app.post('/users/update', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    };

    await User.update({ name, occupation, newsletter }, { where: {id: id} });

    res.redirect('/');
})

app.get('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: { id: id} });

    res.render('/');
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id} });

    res.render('users', { user: user });
});

//apagando o elemento da segunda tabela
app.post('/address/delete', async (req, res) => {

    const UserId = req.body.UserId;
    const id = req.body.id;

    //apagando o elemento que tem o id igual do que foi clicado pelo usuário
    await Address.destroy({ where: { id: id} });

    res.redirect(`/users/edit/${UserId}`);
});

//post que recebe os dados do endereço do usuário
app.post('/adress/create', async (req, res) => {
    //pegandos os dados que foi passado
    const UserId = req.body.UserId;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;

    //criando o novo registro na tabela de endereços
    await Address.create({ UserId, street, number, city });

    //redirecionando para editar o usuário que é onde dá para visualizar o endereço
    res.redirect(`/users/edit/${UserId}`);
})

//iniciando normalmente o servidor e conectando com o banco de dados
conn.sync().then(() => {
    app.listen(port);
}).catch(err => {console.log('Erro ao iniciar o servidor')});

//iniciando o servidor, porém reestruturando todas as tabelas
//fazendo com que seja excluido todos os dados
// conn.sync({ force: true }).then(() => {
//     app.listen(port);
// }).catch(err => {console.log('Erro ao iniciar o servidor')});