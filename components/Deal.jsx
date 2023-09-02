
export function Deal({deal, deleteDeal}){
   return <>
      <div className = 'inline'>
        <div>{deal}</div>
        <button onClick = {() =>deleteDeal()}>X</button> 
      </div>
     </>
}