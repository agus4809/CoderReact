import React from 'react'
import ItemListContainer from './ItemListContainer';

const Item = ({id, banda, genero, año, precio, stock, portada}) => {
 
    
    return (
    <div>
      <h1>{id}</h1>
      <h2>banda {banda}</h2>
      <h2>genero {genero}</h2>
      <h2>Año de lanzamiento {año}</h2>
      <h2>Portada {portada}</h2>
      <h2>Precio : $ {precio}</h2>
      <h2>Stock {stock}</h2>
      <button> ver detalles </button>
    </div>
  )
}

export default Item
