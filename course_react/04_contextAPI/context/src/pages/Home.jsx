import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColor } from "../hooks/useTitleColor";

const Home = () => {
    const { counter, setCounter } = useContext(CounterContext);

    const { color, dispatch } = useTitleColor();
    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <div>
            <h1 style={{ color: color }}>This is Home</h1>
            <p>Valor do contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
            <button
                onClick={() => {
                    setTitleColor("RED");
                }}
            >
                Vermelho
            </button>
            <button
                onClick={() => {
                    setTitleColor("BLUE");
                }}
            >
                Azul
            </button>
        </div>
    );
};

export default Home;
