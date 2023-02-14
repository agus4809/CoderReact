import React, { useEffect, useState } from 'react'

const ItemCount = () => {
  
    const [counter, setCounter] =useState(1); //aca deberia ir el stock
    const [texto, setTexto] = useState("disponible")
  
    const sumar = ()=>{
        setCounter(counter + 1);
        stock();
        
        
     }
    const restar = ()=>{
        setCounter(counter - 1);
        if(counter === 0){
            setCounter(0);
            stock();
        }
           
        }

       const stock = ()=>{
        if(counter === 0){
            setTexto("sin stock")
        }else{
            setTexto("disponible")
        }
       }
        
       
    
    return (
    <div>
      <h1>{counter}</h1>
      <button onClick={sumar}> Sumar </button>
      <button onClick={restar}> Restar </button>
      <p>{texto}</p>
    </div>
  )
}

export default ItemCount
