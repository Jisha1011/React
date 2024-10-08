import React from 'react'
import { FaPlus } from 'react-icons/fa';

export const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    
    <form className ='addForm' onSubmit={handleSubmit}
    
    >
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
          //  ref={inputRef}
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            />
            <button 
                type='submit'
                aria-label='Add Item'
                >
                    <FaPlus></FaPlus>
                </button>

    </form>
  )
}

export default AddItem;