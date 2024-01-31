import React from 'react'

const CarDetalils = ({ id, brand, km, color, newCarro }) => {
  return (
    <div>
      <h2>detalhes do carro: </h2>
      <ul>
        <li>Id: {id}</li>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>

      </ul>
      <li>{newCarro && <p>este carro é novo</p>}</li>
      <li>{!newCarro && <p>este carro não é novo</p>}</li>
    </div>
  )
}

export default CarDetalils
