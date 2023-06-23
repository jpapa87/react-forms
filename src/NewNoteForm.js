


function NewNoteForm() {
  return (
    <div className="form-container">
      <form className="the-form">
        <label id="content-input">
          content: 
          <input type="text" name="content"/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewNoteForm