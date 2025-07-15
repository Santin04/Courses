import "./GameOver.css";

const GameOver = ({ retry, score }) => {
    return (
        <>
            <h1>Fim de jogo!</h1>
            <h2>
                A sua pontuação foi: <span>{score}</span>
            </h2>
            <button onClick={retry}>Reiniciar</button>
        </>
    );
};

export default GameOver;
