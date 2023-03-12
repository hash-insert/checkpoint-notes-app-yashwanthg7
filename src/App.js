import './App.css';
import React from "react";
import { useState } from 'react';
import Header from './components/Header';
import AddNote from './components/AddNote/AddNote';
//import Note from './components/note/Note.js';
import { nanoid } from 'nanoid';
import NotesList from './components/NoteList/NoteList';


function App() {
  let [notes, setNotes] = useState([

  ]);
  let handleAddNote = (note) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    let newNote = {
      id: nanoid(),
      content: note,
      date: date
    }
    let newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  let handleDeleteNote = (id)=>{
    let newNotes=[]
    for( let note of notes)
    {
      if(note.id !== id)
      {
        newNotes.push(note);
      }
    }
    setNotes(newNotes);
  }

  return (
    <div className='mydiv'>
      <Header />
      <AddNote addNote={handleAddNote}  />
      <NotesList notes={notes} deleteNote={handleDeleteNote}/>
    </div>
  );
}

export default App;