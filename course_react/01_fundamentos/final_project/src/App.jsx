//css
import "./App.css";

//imports methods
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
    const [GameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const pickWordAndCategory = () => {
        const categories = Object.keys(words);
        const category =
            categories[Math.floor(Math.random() * categories.length)];

        const valuesCategory = words[category];
        const word =
            valuesCategory[Math.floor(Math.random() * valuesCategory.length)];

        return { category, word };
    };

    const startGame = () => {
        clearLetterStates();

        const { category, word } = pickWordAndCategory();

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((letter) => letter.toLowerCase());

        setPickedCategory(category);
        setPickedWord(word);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    };

    const verifyLetter = (letter) => {
        const normalLetter = letter.toLowerCase();

        if (
            guessedLetters.includes(normalLetter) ||
            wrongLetters.includes(normalLetter)
        ) {
            return;
        }

        if (letters.includes(normalLetter)) {
            //com esse parâmetro de dentro da func você pega o atual valor
            setGuessedLetters((actualGuessesLetters) => [
                //com os ... você passa todos os valores atuais
                ...actualGuessesLetters,
                //adiciona o novo valor
                normalLetter,
                //semelhante a dar um append em uma lista qualquer
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalLetter,
            ]);

            //semelhante ao varName = varName - 1
            setGuesses((actualGuesses) => actualGuesses - 1);
        }
    };

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(3);
    const [score, setScore] = useState(0);

    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    };

    //monitorando a variavel que foi passada dentro de [], ou seja, toda vez que
    //for alterado o valor de guesses, vai passar por aquele if
    useEffect(() => {
        if (guesses <= 0) {
            //função que zera os states
            clearLetterStates();

            //exibindo a tela de game over
            setGameStage(stages[2].name);
        }
    }, [guesses]);

    useEffect(() => {
        //com isso você cria um array aonde não vai ter valores repetidos
        const uniqueLetters = new Set(letters);

        if (guessedLetters.length == uniqueLetters.size) {
            setScore((actualScore) => actualScore + 100);

            startGame();
        }
    }, [guessedLetters, letters, startGame]);

    const retry = () => {
        setScore(0);
        setGuesses(guessesQty);

        setGameStage(stages[0].name);
    };

    return (
        <div>
            {GameStage === "start" ? (
                <StartScreen startGame={startGame} />
            ) : null}
            {GameStage === "game" ? (
                <Game
                    verifyLetter={verifyLetter}
                    pickedWord={pickedWord}
                    pickedCategory={pickedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongLetters={wrongLetters}
                    guesses={guesses}
                    score={score}
                />
            ) : null}
            {GameStage === "end" ? (
                <GameOver retry={retry} score={score} />
            ) : null}
        </div>
    );
}

export default App;
