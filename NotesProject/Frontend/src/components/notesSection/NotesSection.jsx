import React, { useEffect, useState } from "react";
import NoteContainer from "./NoteContainer";

function NotesSection() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:4000/notes");
    const notes = await response.json();
    setNotes(notes);
  };

  useEffect(() => {
    (async () => {
      await fetchNotes();
    })();
  }, []);

  const addNoteHandler = async () => {
    const newNote = prompt("Add a new note");
    if (newNote.trim()) {
      await fetch("http://localhost:4000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: newNote,
        }),
      });
      fetchNotes();
    }
  };

  const editHandler = async ({ id, note }) => {
    const updatedNote = prompt("Edit the note", note);
    if (updatedNote.trim()) {
      await fetch("http://localhost:4000/notes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          note: updatedNote,
        }),
      });
      fetchNotes();
    }
  };
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:4000/notes/${id}`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  return (
    <div>
      <div className="container flex gap-8 p-6 mx-auto justify-center flex-wrap">
        {notes.map(({ id, note }, i) => (
          <NoteContainer
            key={i}
            note={note}
            id={id}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </div>
      <div
        className="add-notes px-4 py-1.5 cursor-pointer text-4xl bg-cyan-500 text-white rounded-full fixed bottom-8 right-8"
        title="Add Notes"
        onClick={addNoteHandler}
      >
        +
      </div>
    </div>
  );
}

export default NotesSection;
