import NewNoteForm from './NewNoteForm'
import NotesContainer from './NotesContainer'

function App() {
  return (
    <div>
      <h1>all the notes!</h1>
      <div className="notes-main">
        <NotesContainer />
        <NewNoteForm />
      </div>
    </div>
  );
}


export default App;
