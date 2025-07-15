import { useState } from "react";

const MyForm02 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const editName = (e) => {
        // o "e" é o evento e tem várias propriedades e da para acessar o valor
        // de dentro do input através desse seguinte código
        console.log(e.target.value);
    };

    return (
        <>
            <form>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={editName}
                />
                {/* o onchange faz que toda vez que o valor do input seja
                alterado (incluir ou retirar um caracter) vai realizar a
                função */}
            </form>
        </>
    );
};

export default MyForm02;
