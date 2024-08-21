import Header from './Header';
import Content from './Content';
import { Footer } from './Footer';
import { useState } from 'react';

function App() {
const name ="Jisha";
const [item, setItem] = useState([
  {
      id:1,
      checked: false,
      item: "One Half pound of Cocoa COvered Almond Unsalted"
  },
  {
      id : 2,
      checked: false,
      item: "Item 2"  
  },

  {
      id: 3,
      checked : false,
      item : "Item 3"
  }]
)

const handleCheck =(id) =>{
  const listItem = item.map((item) => item.id===id?{...item,
      checked: !item.checked
  }: item);
  setItem(listItem);
  localStorage.setItem('shoppinList',JSON.stringify(listItem))
  

}

const handleDelete=(id) =>{
  const listItem1 =item.filter((item) => item.id!==id);
  setItem(listItem1);
}

 
  return (
    <div className='App'>
    <Header />
    <Content 
      item={item}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>

    <Footer length={item.length}/>
     
    </div>
  )
}
export default App;
