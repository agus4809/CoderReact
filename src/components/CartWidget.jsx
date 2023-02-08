import React from 'react'
import { Image } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
    <a href=""><Image
    boxSize='40px'
    objectFit='cover'
    src='https://cdn-icons-png.flaticon.com/128/3144/3144456.png'
    alt='shopping cart'
  /> - 2 -</a>
    </div>
  )
}

export default CartWidget
