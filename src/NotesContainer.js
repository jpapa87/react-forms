import SingleNote from './SingleNote'
 
function NotesContainer({notes, search}) {
  const filterNotes = notes.filter((note)=> {
    return note.content.includes(search)
  })
  // console.log(filterNotes)
  const allNotes= filterNotes.map((note) => {
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
