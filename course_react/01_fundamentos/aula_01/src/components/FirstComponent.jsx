//temos o código HTML e dentro dele podemos usar {}, e o código que for
//inserido dentro dos parenteses, é um código que é executado em js

//criando o componente que vai ser uma função que retorna o HTML para minha
//aplicação
const FirstComponent = () => {
    //definindo uma variavel que vamos usar dentro do nosso código HTML
    const name = 'Mateus';

    //retornando o HTML
    return (
        //HTML que vai aparecer quando chamar a função
        <div>
            <h1>First component</h1>
            <h2>O {name} é um cara muito foda</h2>
        </div>
    );
};

//exportando o componente para poder usar em outros arquivos da aplicação
export default FirstComponent;