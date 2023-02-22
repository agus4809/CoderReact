import React from 'react'

const PruebaEventos = () => {
 
 const vocales = (e)=>{
    
    if(e.key === "a"||
    e.key === "e"||
    e.key === "u"||
    e.key === "i"||
    e.key === "o"){
        console.log("error")
    }
    else{
        console.log("bien");
 }
 }
    
 
    return (
    <div>
        <h1>aca va el texto</h1>
      <input onKeyDown={vocales} type="text" name="" id="vocales" />
      <h1>Hola</h1>
    </div>
  )
}

export default PruebaEventos
