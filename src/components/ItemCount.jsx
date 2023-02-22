import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter,Stack,Heading,Divider,
    ButtonGroup,Button,Image,Text } from '@chakra-ui/react'
  

const ItemCount = ({discosDetail}) => {
    
    const [counter, setCounter] =useState(0); //aca deberia ir el stock
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
      
      <h2>Stock de discos: {discosDetail.stock - counter} discos</h2>
      <ButtonGroup spacing='2'>      
      <Button variant='solid' colorScheme='blue' onClick={sumar}>
        Agregar al carrito
      </Button>

      <Button variant='solid' colorScheme='blue' onClick={restar}>
        Quitar del carrito
      </Button>
    </ButtonGroup>

     
      {/* <p>{texto}</p> */}
    </div>
  )
}

export default ItemCount
