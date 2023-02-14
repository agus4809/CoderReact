import React from 'react'
import Item from './Item'


const ItemList = ({discos}) => {
  return (
    <>
    {discos.map((disco)=>(
      <Item>
          id={disco.id}
          genero ={disco.genero}
          banda = {disco.banda}
          titulo ={disco.titulo}
          año de lanzamiento = {disco.año}
          stock disponible = {disco.stock}
          portada ={disco.portada}
          precio ={disco.precio}
      </Item>
  
    ))}
    
    </>
  );
};

export default ItemList;
