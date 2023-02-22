import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,Button
} from '@chakra-ui/react'

const Contacto = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input placeholder='Ingrese Su Nombre' />
        <FormLabel>Apellido</FormLabel>
        <Input placeholder='Ingrese Su Apellido' />
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>Nunca compartiremos su informacion con nadie.</FormHelperText>
        <br />
        <Link to={"/"}>
        <Button type = "submit" colorScheme='blue'>Enviar</Button>
        </Link>
        
      </FormControl>
    </div>
  )
}

export default Contacto
