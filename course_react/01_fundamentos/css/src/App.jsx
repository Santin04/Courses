import MyComponent from './components/MyComponent'
import './App.css'
import { useState } from 'react';
import CssModule from './components/CssModule';

function App() {

  const num = 15;
  const [name, setName] = useState('Mateus');

  const editColor = () => {
    setName('Mike');
  };

  const MyClass = true;

  return (
    <>
      <MyComponent />
      {/* Mostrando um exemplo de como colocar css sem o arquivo css */}
      <p style={{ color: 'blue' }}>Css diretamente do HTML</p>

      {/* Css inline com condicional */}
      <h2 style={num < 10 ? ({color: "purple"}) : ({color: "green"})}>
        Teste de css com condicional
      </h2>

      {/* Css inline com condicional e dinamico */}
      <h2 style={name == 'Mateus' ? ({color: "greenyellow"}) : (null)}>
        {name}
      </h2>
      <button onClick={editColor}>Editar nome</button>

      {/* Deixando as classes de forma dinamica com condicionais */}
      <h2 className={MyClass ? ('classe01') : ('classe02')}>
        Testando classes
      </h2>

      {/* CSS module */}
      <CssModule />
    </>
  );
};

export default App;
