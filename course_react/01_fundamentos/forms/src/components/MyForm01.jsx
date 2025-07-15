const MyForm01 = () => {
    return (
        <>
            <form>
                {/* Uma forma de fazer um input e label */}
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" />

                {/* Outra forma de fazer um input label sem htmlfor */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                    />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default MyForm01;
