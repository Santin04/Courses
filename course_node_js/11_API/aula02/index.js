const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Minha primeira rota criada com sucesso'});
})

app.post('/createproduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if(!name) {
        res.status(422).json({ message: 'O campo é obrigatório' })
        return;
    };

    console.log(name);
    console.log(price);

    //colocar .status para passar o status HTTP
    res.status(201).json({message: `O produto ${name} foi cadastrado`});
})

//rodando
app.listen(port);