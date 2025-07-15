const Event = () => {

    //criando a função que vai ocorrer quando o botão for clicado
    const myNewEvent = (e) => {
        //esse e é informações sobre o event
        console.log(e);

        console.log('clicou no botão');
    };

    return (
        <div>
            {/* criando o botão e chamando a function do evento de clique */}
            <button onClick={myNewEvent}>Clique aqui</button>
        </div>
    );

};

export default Event;