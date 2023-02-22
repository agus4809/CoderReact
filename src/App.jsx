import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Cart from './components/Cart'

import Item from './components/Item'
import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList'
import PruebaEventos from './components/PruebaEventos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  
  
  return (
    
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        
          <Route exact path="/discos" element={<ItemListContainer/>} />
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/contacto" element={<Contacto/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path='/genero/:genero' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/prueba' element={<PruebaEventos/>}/>
      </Routes>

      
      </BrowserRouter>
      
        
      
    </div>
  
    
    
  )
}

export default App
