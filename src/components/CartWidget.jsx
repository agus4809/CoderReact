import React from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
    <Link to="/cart">
    <Image
    boxSize='40px'
    objectFit='cover'
    src='https://cdn-icons-png.flaticon.com/128/3144/3144456.png'
    alt='shopping cart'
    /> - 2 -
    </Link>
    </div>
  )
}

export default CartWidget
