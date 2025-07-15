//importando o hook useState
import { useState } from "react";

const FirstHooke = () => {

  let valor = 10;

  const mudarValor = () => {
    valor = 15;
  }

  //criando o hook e passando o valor inicial 5
  const [number, setNumber] = useState(5);

  return (
    <div>
      {/* Dessa forma o valor não se altera */}
      <p>Valor: {valor}</p>
      <button onClick={mudarValor}>Mudar valor</button>

      <p>Segundo valor: {number}</p>
      <button onClick={() => setNumber(10)}>Mudar valor</button>
    </div>
  );
};

export default FirstHooke;