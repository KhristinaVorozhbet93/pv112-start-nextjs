import { Deal } from "./Deal";
import React from "react";
import styles from './ToDoList.module.css'

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
  <div className={styles.container}>        
        <h1 className={styles.head}>Todo list</h1>
          <div className={styles.text}>
            <input className={styles.inp} value = {text}
            onInput = {evt => setText(evt.target.value)}/>     
            <button className = {styles.btn}  
             onClick = {() => {setList([...listOfDeal, text]), setText('')}}>Add</button>
          </div>
          <div className = {styles.list}>   
            <ol>           
            { 
            listOfDeal.map((element,index) => <li className={styles.elem} key = {index}><Deal deal = {element}                   deleteDeal={() => delDeal(index)}/></li>)}
            </ol>  
          </div> 
  </div>
</>
}

