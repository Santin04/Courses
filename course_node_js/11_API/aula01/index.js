//Importações
const express = require('express');
const app = express();
const port = 3000;

//configurando
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas - endpoints
app.get('/', (req, res) => {
    //enviando dados para o front end, esse dado vai ter o formato de um JSON
    res.json({message: 'Minha primeira rota criada com sucesso'});
})

//simulando um cadastro de produto para visualizar como fica no postman
app.post('/createproduct', (req, res) => {
    //Obs: os dados vão ser passado pela simulação do postman

    //pegando os valores que foi passado pelo usuário através de um form
    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    //enviando como resposta que o produto foi cadastrado com sucesso
    res.json({message: `O produto ${name} foi cadastrado`});
})

//rodando
app.listen(port);