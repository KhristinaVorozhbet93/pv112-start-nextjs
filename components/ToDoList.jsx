import { Deal } from "./Deal";
import React from "react";

const list = ['Feed the cat','Clearn the house','Do homework', 'Walk the dog'];

export function ToDoList(){
  const 
      [listOfDeal, setList] = React.useState(list), 
      [text, setText] = React.useState()
  function delDeal(index)
  {  
    listOfDeal.splice(index, 1)
    setList([...listOfDeal])
  }  
  return <>
  <div className='container'>        
        <h1>Todo list</h1>
          <div className='text'>
            <input className='inp' value = {text}
            onInput = {evt => setText(evt.target.value)}/>     
            <button className = 'btn'  
             onClick = {() => {setList([...listOfDeal, text]), setText('')}}>Add</button>
          </div>
          <div className = 'list'>   
            <ol>           
            { 
            listOfDeal.map((element,index) => <li key = {index}><Deal deal = {element}                   deleteDeal={() => delDeal(index)}/></li>)}
            </ol>  
          </div> 
  </div>
</>
}

