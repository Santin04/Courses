const EditMessage = ({ editMessageFunc }) => {

    const mensagens = ['Mensagem 01', 'Mensagem 02', 'Mensagem 03'];

    return (
        <>
            <button onClick={() => editMessageFunc(mensagens[0])}>Mudar mensagem 01</button>
            <button onClick={() => editMessageFunc(mensagens[1])}>Mudar mensagem 02</button>
            <button onClick={() => editMessageFunc(mensagens[2])}>Mudar mensagem 03</button>
        </>
    )
}

export default EditMessage;