import React, { useEffect, useState } from 'react'
import './App.css'
import Name from './page/Name'

function App() {
  const [produtosApi, setProdutosApi] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((resp) => resp.json())
      .then((resp) => setProdutosApi(resp))
      .catch((error) => console.error(error))
  }, []) // <-- Passando um array vazio para garantir que o efeito seja executado apenas uma vez

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, { method: 'delete' })
      .then(() => (window.location = '/products'))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1>Lista de produtos trazido da API que criei: </h1>
      <Name></Name>



      {produtosApi.map((prod) => (
        <ul key={prod.id}>
          <li>{prod.id}</li>
          <li>{prod.name}</li>
          <li>{prod.price}</li>

          <button onClick={handleDelete.bind(this, prod.id)}>Deletar</button>
        </ul>
      ))}
    </>
  )
}

export default App
