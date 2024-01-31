import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Tittle from './components/Tittle'

function App() {

  const n = 15
  const [name] = useState("Davi")
  const redTittle = true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent></MyComponent>
      {/* Este é o paragrafo do componente */}
      <p>este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "aquamarine", padding: "25px", backgroundColor: "red" }}>
        Este elemento foi estilizado de forma inline</p>
      {/* CSS dinamico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinamico</h2>
      <h2 style={n < 20 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinamico</h2>
      <h2 style={name == "Davi" ? ({ color: "green" }) : (null)}>Davi lindo</h2>

      {/* Classe dinamica */}
      <h2 className={redTittle ? "red-tittle" : "tittle"}>
        Este título vai ter classe dinamica</h2>

      {/* CSS MODULES USA ESSE */}
      <Tittle></Tittle>
    </>
  )
}

export default App
