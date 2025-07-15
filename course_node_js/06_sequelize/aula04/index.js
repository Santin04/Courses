//Nessa aula vamos aprender a como editar os dados do banco de dados utilizando
//o sequelize

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const User = require('./models/User');
const conn = require('./db/conn');
const { where } = require('sequelize');


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

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

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw : true, where: { id : id } });

    res.render('useredit', { user : user });
});

app.post('/users/update', async (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    };

    await User.update({ name, occupation, newsletter }, { where: { id : id } } );

    res.redirect('/');
});

app.get('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: { id : id } });

    res.render('/');
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw:true, where: { id : id} });

    res.render('users', { user: user });
});

conn.sync().then(() => {
    app.listen(port);
}).catch(err => {console.log('Erro ao iniciar o servidor')});