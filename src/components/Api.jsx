import React, { useEffect, useState } from 'react'
import CompPresentacion from './CompPresentacion';

const Api = () => {
  
    const getProducts = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(getProducts);
        const datos = await response.json();
        //console.log(datos);
        return datos;
        };
        
        const [product, setProduct] = useState([]);

        useEffect(()=>{
            getProducts().then((product)=>setProduct(product));
        }, []);


    return (

    <div>
        {product.map((prod)=>{
            return <CompPresentacion key = {prod.id} product ={product}/>;
        })}
    </div>
  )
};

export default Api
