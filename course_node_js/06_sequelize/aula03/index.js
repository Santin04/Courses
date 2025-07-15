//nessa aula vamos aprender a puxar dados do banco de dados
//só que diferente da aula passada, que puxava todos os dados
//da tabela, vamos puxar dados com WHERE e também vamos aprender
//a remover usuários da tabela

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;
const User = require('./models/User');
const conn = require('./db/conn');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', async (req, res) => {

    const user = await User.findAll({raw: true});

    res.render('home', {user: user});
});

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on'){
        newsletter = true;
    };

    await User.create({ name, occupation, newsletter });

    res.redirect('/');
})

//deixando a função asyncrona para poder esperar puxar o dado do banco
app.get('/users/:id', async (req, res) => {
    //buscando qual id foi passado na url
    const id = req.params.id;

    //puxando da tabela o elemento que tem o id igual da url
    const user = await User.findOne({ raw: true, where: {id: id} });

    //passando os dados do user para o front end
    res.render('users', { user });
});

app.get('/users/delete/:id', async (req, res) => {
    //pegando o id que usuário passou no url
    const id = req.params.id;

    //utilizando o metodo que vai excluir o user com o id do url
    //esperando deletar o dado do banco para depois continuar o código
    await User.destroy({ where: { id: id } });

    //mandando para home de volta, agora já sem o usuário q ele excluiu
    res.redirect('/');
});

conn.sync().then(() => {
    app.listen(port);
}).catch(err => {console.log('Erro ao contectar')});