import React from 'react';
import './AddNote.css';
import { useState } from 'react';


let text ="Type to add a note here";

function AddNote( {addNote} ) {
  let [note,setNote] = useState("")
  let handleChange = (e)=>{
    e.preventDefault();
    setNote(e.target.value);
  }

  let handleSave = () =>{
    addNote(note);
  }
  return (
    <div>
      <div className='container'>
        
        <button className='container-button' onClick={handleSave()} > Save</button>
        <textarea className='container-textarea' placeholder='Type here to add a note' value={note} onChange={handleChange}> </textarea>
      </div>
    </div>
  )
}

export default AddNote;
