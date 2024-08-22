import Header from './Header';
import Content from './Content';
import { Footer } from './Footer';
import { useState } from 'react';
import { AddItem } from './AddItem';
import { SearchItem } from './SearchItem';

function App() {
const name ="Jisha";
const [item, setItem] = useState(JSON.parse(localStorage.getItem('shoppinList'))
  
);
const [newItem, setNewItem] = useState('')
const [search,setSearch] = useState('')
const handleCheck =(id) =>{
  const listItem = item.map((item) => item.id===id?{...item,
      checked: !item.checked
  }: item);
  setItem(listItem);
  localStorage.setItem('shoppinList',JSON.stringify(listItem))
  

}

const handleDelete=(id) =>{
  const listItem =item.filter((item) => item.id!==id);
  setItem(listItem);
  localStorage.setItem('shoppinList',JSON.stringify(listItem))
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!newItem) return;
addItem(newItem);
//setNewItem('');
//localStorage.setItem('shoppinList',JSON.stringify(listItem))
//console.log(newItem);
}

const addItem =(newitem)=>{
  console.log(newitem)
const id = item.length?item[item.length-1].id +1 : 1;
const myNewItem = {id, checked:false, item:newitem};
const listItems=[...item, myNewItem]
setItem(listItems);
localStorage.setItem('shoppinList',JSON.stringify(listItems))

} 


  return (
    <div className='App'>
    <Header />
    
    <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
          search={search}
          setSearch={setSearch}
        />
      
    <Content 
      item={item.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>

    <Footer length={item.length}/>
     
    </div>
  )
}
export default App;
