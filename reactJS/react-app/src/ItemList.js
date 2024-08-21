import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export const ItemList = ({ item,handleCheck,handleDelete }) => {
  return (
   <div>

<ul>
        {item.map((item) => (
    <li className="item" key={item.id}>
                    <input 
                    type = "checkbox" 
                    onChange={()=>handleCheck(item.id)}
                    checked={item.checked}>

                    </input>
                    <label
                        onDoubleClick={() =>handleCheck(item.id)}
                        style={(item.checked)?{textDecoration:'line-through'}:null}
                    >
                        
                        {item.item}</label>
                    <FaTrashAlt 
                    onClick={()=>handleDelete(item.id)}
                        role="button" 
                        tabIndex="0"/>
                </li>
       ) )}
  

        </ul>


   </div> 
  )
}


export default ItemList
