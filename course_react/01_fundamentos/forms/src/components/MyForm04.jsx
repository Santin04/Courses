import { useState } from "react";

const MyForm04 = ({ user }) => {
    const [name, setName] = useState(user.name);

    const handleName = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <form>
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

export default MyForm04;
