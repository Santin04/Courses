import { useState } from "react";

const Conditional = () => {

    const [x] = useState(true);
    const [y] = useState(false);

    const [name] = useState('Mateus');

    const [name02, setName] = useState('Roberto');

    return (
        <div>
            {/* PRIMEIRO JEITO DE FAZER UMA CONDICIONAL */}
            {/* se x for verdadeiro vai exibir o parágrafo */}
            {x && <p>X mostrando</p>}
            {/* como o ! eu inverti, ou seja vai mostrar se for false */}
            {!y && <p>Y mostrando</p>}

            {/* SEGUNDO JEITO DE FAZER UMA CONDICIONAL */}
            {name === 'Mateus' ? (<p>Nome correto</p>) : (<p>Nome incorreto</p>)}

            {name02 === 'Márcio' ? (<p>Nome certo</p>) : (<p>Nome errado</p>)}
            <button onClick={() => setName('Márcio')}>Trocar nome</button>
        </div>
    );

};

export default Conditional;