import { useState } from "react"

function NewNoteForm({setNotes, notes}) {
  const [newNote, setNewNote]= useState ("")

  function handleSearch(e) {
    setNewNote(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
      const myNewNote= {
      content : newNote
    }
    // console.log(myNewNote)
    fetch("http://localhost:4000/notes", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify (myNewNote)
    })
      .then(r => r.json())
      .then(newServerNote => setNotes([...notes, newServerNote]))
     // setNotes ([...notes, myNewNote ])

  }
  return (
    <div className="form-container">
      <form onSubmit= {handleSubmit} className="the-form">
        <label id="content-input">
          content: <input onChange= {handleSearch} 
          type="text" 
          name="content"/>
        </label>
        <input type="submit" value="add new note"/>
      </form>
    </div>
  )
}

export default NewNoteForm
