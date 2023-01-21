import React, { useState } from 'react'
import Note from './Note'
import {v4 as uuidv4} from 'uuid';

export default function Cc() {
    const [notes,setnotes]=useState([
        {id:uuidv4(), nom:'tanger',done:false},
        {id:uuidv4(),nom:'fes',done:false},
        {id:uuidv4(),nom:'casa',done:false},

    ])
const [task,settask]=useState('');
const addtask=()=>{
    let ntasks=[...notes];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    setnotes(ntasks);
    settask('');
}
 const sup=(idsup)=>{
   let ntache=notes.filter((t)=>{
    return t.id!=idsup
   })
   setnotes(ntache);
 }
  return (
    
      <div class='to_do_list'>
      <h1><u>To Do List _App</u></h1>
      <form >
        Ajouter une ville: <input type="text"  value={task} onChange={(e)=>{settask(e.target.value)}} className='input_aj' />
        { <input className='ajou' type="button" value="Ajouter" onClick={addtask} id='inp2' /> }
        
      </form> <br /><br />
      <ul>
        {
            notes.map((t)=>{
                return <li   key={t.id}>
                    <Note setnotes={setnotes} id={t.id} Task_done={t.done} delf={()=>sup(t.id)} txt={t.nom} className='list' />
                    </li> 
            })
        }
      </ul>
      <div className='rr'>
    </div>
    </div>
    
  )
}