import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { LineItem } from './LineItem';

export const ItemList = ({ item,handleCheck,handleDelete }) => {
  return (
   <div>

<ul>
        {item.map((item) => (
            <LineItem 
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}>

            </LineItem>
    
       ) )}
  

        </ul>


   </div> 
  )
}


export default ItemList
