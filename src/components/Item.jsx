import React from 'react'
import ItemListContainer from './ItemListContainer';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Heading, Button } from '@chakra-ui/react'
import { Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
 
    
    return (
      <div>
        
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '400px' }}
              src={item.portada}
              alt='Caffe Latte'
            />

            <Stack>
            <CardBody>
              <Heading size='md'>{item.banda}</Heading>

              <Text py='5  '>
              <h1>ID: {item.id}</h1>
              <h2>banda {item.banda}</h2>
              <h2>genero {item.genero}</h2>
              <h2>Año de lanzamiento {item.lanzamiento}</h2>           
              <h2>Precio : $ {item.precio}</h2>
              <h2>Stock {item.stock}</h2>
              </Text>
            </CardBody>

              <CardFooter>
                <Link to={`/item/${item.id}`}>
                <Button variant='solid' colorScheme='blue'>Detalles</Button>
                </Link>
                
              </CardFooter>
            </Stack>
          </Card>

    {/* <div>
      <img src={item.portada} alt="" /> 
      <h1>ID: {item.id}</h1>
      <h2>banda {item.banda}</h2>
      <h2>genero {item.genero}</h2>
      <h2>Año de lanzamiento {item.lanzamiento}</h2>           
      <h2>Precio : $ {item.precio}</h2>
      <h2>Stock {item.stock}</h2>
      <button> ver detalles </button>
    </div> */}
    </div>)
}

export default Item
