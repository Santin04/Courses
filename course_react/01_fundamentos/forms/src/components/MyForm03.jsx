import { useState } from "react";

const MyForm03 = () => {
    //criando aonde vai ser guardado o valor do input
    const [name, setName] = useState("");

    //alterando a variavel name, toda vez que o usuário acrescenta ou retira um
    //caracter
    const handleName = (e) => {
        setName(e.target.value);
    };

    //tirando o evento padrao de recarregar página quando enviar o formulário e
    //exibindo o valor do name que era oque estava no campo
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando o formulário");
        console.log(name);
    };

    return (
        <>
            {/* onSubmit é a função que é chamada quando o formulários é
            enviado */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={handleName}
                    value={name}
                />
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default MyForm03;
