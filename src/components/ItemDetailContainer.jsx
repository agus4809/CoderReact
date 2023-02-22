import React from 'react'
import ItemCount from './ItemCount'
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

  const [discosDetail, setDiscosDetail] = useState([]);
  const {id} =useParams();
  
  const discos = [
    {id:1, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Appetite for Destruction",
        lanzamiento: "1987",
        stock:5,
        portada: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/05/21/16215957812310.jpg',
        available: true,
        precio: 150,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    },
    {id:2, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "G N' R Lies",
        lanzamiento: "1988",
        stock:5,
        portada: 'https://ladobmusica.com.ar/pub/media/catalog/product/cache/2c246b008315a461dd64781fe12af0bd/6/_/6_3_00241982.jpg',
        available: true,
        precio: 260,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:3, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Use Your Illusion I",
        lanzamiento: "1991",
        stock:7,
        portada: 'https://upload.wikimedia.org/wikipedia/en/e/ea/GnR--UseYourIllusion1.jpg',
        available: true,
        precio: 250,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:4, 
        genero: "Rock",
        banda: "Guns N Roses", 
        titulo: "Use Your Illusion II",
        lanzamiento: "1991",
        stock:16,
        portada:'https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973',
        available: true,
        precio: 180,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:5, 
        genero: "pop",
        banda: "U2", 
        titulo: "The Joshua Tree",
        lanzamiento: "1987",
        stock:16,
        portada:'https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png',
        available: true,
        precio: 200,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:7, 
        genero: "pop",
        banda: "U2", 
        titulo: "All That You Can't Leave Behind",
        lanzamiento: "2000",
        stock:25,
        portada:'https://upload.wikimedia.org/wikipedia/en/5/5b/U2-all-that-you-cant-leave-behind.jpg',
        available: true,
        precio: 1500,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:8, 
        genero: "cumbia",
        banda: "La Nueva Luna", 
        titulo: "Difusión: La Nueva Luna",
        lanzamiento: "1995",
        stock:3,
        portada:'https://christianmanzanelli.com/wp-content/uploads/2012/04/la_nueva_luna_christian_manzanelli_representante_artistico_contratar_sitio_oficial_la_nueva_luna-3.jpg',
        available: true,
        precio:200,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    {id:9, 
        genero: "cumbia",
        banda: "La Nueva Luna", 
        titulo: "La Nueva Luna en el Gran Rex",
        lanzamiento: "2009",
        stock:1,
        portada:'https://http2.mlstatic.com/D_NQ_NP_245225-MLA25412607221_032017-O.webp',
        available: true,
        precio: 250,
        detalle: "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    
    },
    
    ];
  
    const getDetail = () => {
      return new Promise((resolve, reject) => {
          if (discos.length === 0) {
             reject(new Error("No hay datos"));
           }
           setTimeout(() => {
            resolve(discos);
           }, 2000);
         });
      };
    
      useEffect(()=>{
        getDetail()
        .then((res)=> setDiscosDetail(res.find((item)=> item.id === Number(id))))
          },[id])
          
        
      



  return (
    <div >
           


        {<ItemDetail discosDetail={discosDetail}/>  } 
        {/* {<ItemCount discosDetail={discosDetail}/>  } */}
    </div>
  )
}

export default ItemDetailContainer
