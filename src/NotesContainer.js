import SingleNote from './SingleNote'
 
function NotesContainer({notes}) {
  // console.log(notes)
  const allNotes= notes.map((note) => {
    return (
      <SingleNote 
      key= {note.id}
      id= {note.id}
      content= {note.content}
      />
    
    )
  })
  return (
    <div>
      {allNotes}
    </div>
  )
}

export default NotesContainer
