import React, { useState } from 'react';
import Todo from './Todo';
//import logo from './logo.svg';
import './App.css';

const App = () =>{

const [inputList, setInputList]=useState("")
const [Items,setItems] = useState([]);

const itemEvent = (event) =>{
  setInputList(event.target.value);
};

const listOfItems = () =>{
  setItems((oldItems) => {
    return [...oldItems, inputList];
});
setInputList("");

};
const deleteItems = (id) =>{
  console.log('deleted');
  setItems((oldItems) => {
    return oldItems.filter((arrElem,index) =>{
      return index !==id;
    })
  })
};

  return<>
<div className="main_div">
  <div className="centre_div">
    <br />
    <h1>ToDoList</h1>
    <br />
    <input type="text" placeholder="Add a item"value={inputList} onChange={itemEvent} />
    <button onClick={listOfItems}> +</button>
<ol>
 {/* <li>{inputList}</li>*/}

 {Items.map((itemval,index) => {
  // return <li>{itemval}</li>
  return <Todo key={index}
  id={index}
   text = {itemval}
   onSelect = {deleteItems}
    />;
 })}
 </ol>

  </div>
</div>
  </>;
};

export default App;
