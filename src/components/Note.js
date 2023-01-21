import React, { useRef } from 'react'
import './style.css'
export default function Note({txt,delf,id,Task_done,setnotes}) {
    const inpRef = useRef()
    const done=(idp)=>{
       setnotes(prevState=>{
        let newState = prevState.map(note=>{
          if (idp==note.id) {
            return {...note,done:!note.done};
          } 
          return note;
        })
        return newState;
       })
    }

  return (
    <div>
      
      <form >
      <input ref={inpRef} className={`${Task_done ? "realsie" : "cc"}`} type="text"  readOnly value={txt} />  
      <button  onClick={delf} value="Supprimer" className='suppe'>Supprimer</button>

      { <input type="button" value='Done'  onClick={e=>done(id)} class="done"  />  }
     
    
      
      
      </form>
     <br />
    </div>
  )
}