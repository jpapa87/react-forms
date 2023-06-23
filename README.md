# Having fun with forms in React!

## Setup
---
1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start`. This will run your React app on port `4001`.

Make sure to open
[http://localhost:4000/notes](http://localhost:4000/notes) in the browser to verify that your backend is working.

---
## What You Already Have
The `App` component has three children, `SearchNotes`, `NotesContainer`, and `NewNoteForm`.  The display component `NotesContainer` has one child, `SingleNote`, which can be used to display the content from one note.  SingleNote is complete, and if used with a prop of `content` it will display
the note's content on the page.

---
## Deliverables

- Use JavaScript `fetch` to retrieve the existing notes from our `db.json` file then display the notes on the page.
- Submit the form to add a new note to the list.
- Persist new notes with a `POST` request.
- Search the notes by their content using the input in `SearchNotes`