import styles from './Deal.module.css'

export function Deal({deal, deleteDeal}){
   return <>
      <div className = {styles.inline}>
        <div>{deal}</div>
        <button  onClick = {() =>deleteDeal()}>X</button> 
      </div>
     </>
}