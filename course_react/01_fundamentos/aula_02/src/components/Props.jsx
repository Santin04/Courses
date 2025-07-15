//criando uma função que vai ter como seu parâmetro props, que vai ser aonde
//vai ser guardado as variaveis que o elemento que está chamando essa função
//passar

const Props = (props) => {



    return (
        <div>
            {/* Usando o valor que foi passado onde a função foi chamada */}
            <p>recebi essa propriedade: {props.name}</p>
        </div>
    );

};

export default Props;