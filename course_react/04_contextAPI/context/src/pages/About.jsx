import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
    const { counter, setCounter } = useCounterContext();

    return (
        <div>
            <h1>this is About</h1>
            <p>Valor do contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        </div>
    );
};

export default About;
