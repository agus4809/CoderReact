import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter,Stack,Heading,Divider,
  ButtonGroup,Button,Image,Text } from '@chakra-ui/react'

const ItemDetail = ({discosDetail}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image src= {discosDetail.portada} alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {discosDetail.banda}</Heading>
      <Text>
       <h2>Titulo del disco: <b>{discosDetail.titulo}</b> </h2> 
      </Text>
      <Text>
        <h2>Genero : {discosDetail.genero}</h2>
      </Text>
      <Text>
       <h2>Año de lanzamiento: {discosDetail.lanzamiento}</h2> 
      </Text>
      <Text>
        <p>{discosDetail.detalle}</p>
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        <h2>Precio: $ {discosDetail.precio}</h2>
        {<ItemCount discosDetail={discosDetail}/>  }
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  
</Card>

    </div>
  )
}

export default ItemDetail
