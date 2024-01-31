import { Fragment, useState } from 'react'

// styles:
import './App.css'

// components:
import FirstComponent from './components/FirstComponent.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import CarDetalils from './components/CarDetalils.jsx'
import Fragments from './components/Fragments.jsx'
import Container from './components/Container.jsx'
import ExecuteFunction from './components/ExecuteFunction.jsx'
import Message from './components/Message.jsx'
import ChangeMessageState from './components/ChangeMessageState.jsx'


function App() {
  // duas formas de passar props por parâmetro
  const [username] = useState("Laís")
  const cars = [
    { id: 1, brand: "Ferrari", Color: "Amarela", newCarro: true, km: 120 },
    { id: 2, brand: "Porshe", Color: "Preta", newCarro: true, km: 3120 },
    { id: 3, brand: "Lamburguini", Color: "Vermelha", newCarro: false, km: 9187 },
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [messege, setMessege] = useState("")

  const handleMessege = (msg) => {
    setMessege(msg);
  }

  return (
    <div>
      <h1>First Component test</h1>

      {/* props: */}
      {/* <ShowUserName name={username} /> */}
      {/* Destructuring props */}
      {/* <CarDetalils brand="VW" km={100000} color="Azul" newCarro="false" /> */}
      {/* Reaproveitando componentes */}
      {/* <CarDetalils brand="Ford" km={128741} color="Preto" newCarro="false" /> */}
      {/* <CarDetalils brand="Fiat" km={1712} color="Azul" newCarro="true"/> */}

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetalils id={car.id} brand={car.brand} color={car.color} km={car.km} newCarro={car.newCarro} />
      ))}

      {/* fragments */}
      <Fragments />

      {/* Childres */}
      <Container>
        <p>este é o conteúdo</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={messege} />
      <ChangeMessageState handleMessege={handleMessege} />

      <h1 className='puxavai'></h1>
    </div>
  )
}

export default App
