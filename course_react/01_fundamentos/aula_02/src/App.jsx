import './App.css'
import FirstHooke from './components/FirstHooke'
import ListRender from './components/ListRender'
import Conditional from './components/conditional'
import Props from './components/Props'
import Props02 from './components/Props02'
import PropsChildren from './components/PropsChildren'
import PropsFunction from './components/PropsFunction'
import { useState } from 'react'
import Message from './components/Message'
import EditMessage from './components/EditMessage'

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Red', km: 0},
    {id: 2, brand: 'KIA', color: 'White', km: 10000},
    {id: 3, brand: 'Renault', color: 'Gray', km: 5000},
  ];

  const myFunction = () => {
    console.log('função passada por props');
  };

  const [message, setMessage] = useState("mensagem antes da alteração")
  const editMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h1>Aula 02</h1>
      <FirstHooke />
      <hr />
      <ListRender />
      <hr />
      <Conditional />
      <hr />
      <Props name="Mateus"/>
      <hr />
      {cars.map((car) => (
        <Props02 key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
      <PropsChildren valor="teste">
        <h2>Elemento do App</h2>
      </PropsChildren>
      <hr />
      <PropsFunction func={myFunction} />
      <hr />
      <Message msg={message}/>
      <EditMessage editMessageFunc={editMessage}/>
    </div>
  )
}

export default App
