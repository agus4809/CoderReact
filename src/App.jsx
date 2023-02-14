import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import Item from './components/Item'
import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList'



function App() {
  /*
  let productos = [
    {id:1, nombre: "Smart Tv", stock: 5, precio: 55000},
    {id:2, nombre: "Playstation", stock: 5, precio: 55000},
    {id:3, nombre: "cocina", stock: 5, precio: 55000},
    {id:4, nombre: "Heladera", stock: 5, precio: 55000}
  ]
 
 
  const mostrarProductos = () =>{
    return new Promise((resolve, reject)=>{
      
      if (productos.length===0){
        reject(new Error("no hay productos"));
      }
      setTimeout(()=>{
        resolve(productos)
      },3000)
  })
  }

  async function fetchingProductos(){
    try{
      const datosFectch = await mostrarProductos();
      console.log(datosFectch)
    }catch(err){
      console.log(err);
    }
  }

  fetchingProductos();
 */
  
  return (
    
    <div>
      <NavBar/>
      <ItemListContainer greeting ="Bienvenidos a react e-commerce"/>   
      <ItemList/>
        
      
    </div>
  
    
    
  )
}

export default App
