import React from 'react'
import Item from './Item'
//import './src/ItemList.css';


const ItemList = ({discosList}) => {
  
  return (
    <div className='ItemList'>
        {discosList.map((item)=>(
          <Item item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default ItemList;
