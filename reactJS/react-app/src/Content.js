import React from 'react'

import ItemList from './ItemList';
export const Content = ({item,handleCheck,handleDelete}) => {
    
    
    
    
  return (
    <main>
        {item.length?(
            <ItemList
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
        
                
         ): (
            <p style = {{marginTop:'2rem'}}> Your List is Empty</p>
         )}
    </main>
  )
}

export default Content
