import SearchNotes from './SearchNotes'
import NotesContainer from './NotesContainer'
import NewNoteForm from './NewNoteForm'
import { useEffect, useState } from 'react';

function App() {
  const [ notes, setNotes]= useState([])
  useEffect(()=> {
    fetch ("http://localhost:4000/notes")
    .then( r => r.json())
    .then(noteData => setNotes(noteData))
  }, [])
  return (
    <div>
      <h1>all the notes!</h1>
      <SearchNotes />
      <div className="notes-main">
        <NotesContainer notes= {notes}/>
        <NewNoteForm setNotes={setNotes} notes= {notes}/>
      </div>
    </div>
  );
}


export default App;
