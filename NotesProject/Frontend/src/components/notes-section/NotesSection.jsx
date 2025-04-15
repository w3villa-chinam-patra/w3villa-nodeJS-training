import React, { useEffect, useState } from "react";
import NoteContainer from "./NoteContainer";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { ErrorMessages, AppRoutes, SuccessMessages } from "../../constants";

function NotesSection() {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await fetchNotes();
    })();
  }, []);

  const fetchNotes = async () => {
    try {
      if (token) {
        const response = await fetch("http://localhost:4000/note", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const { data } = await response.json();
          setNotes(data);
        }
      } else {
        toast.error(ErrorMessages.AUTH.LOGGED_OUT);
        navigate(AppRoutes.loginRoute);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addNoteHandler = async () => {
    const newNote = prompt("Add a new note");
    try {
      if (newNote.trim()) {
        await fetch("http://localhost:4000/note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            note: newNote.trim(),
          }),
        });
        await fetchNotes();
        toast.success(SuccessMessages.NOTE.CREATE_SUCCESS);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editHandler = async ({ id, note }) => {
    const updatedNote = prompt("Edit the note", note);
    if (updatedNote.trim()) {
      await fetch("http://localhost:4000/note", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          _id: id,
          note: updatedNote,
        }),
      });
      await fetchNotes();
      toast.success(SuccessMessages.NOTE.EDIT_SUCCESS);
    }
  };
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:4000/note/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await fetchNotes();
    toast.success(SuccessMessages.NOTE.DELETE_SUCCESS);
  };

  return (
    <div>
      <div className="container flex gap-8 p-6 mx-auto justify-center flex-wrap">
        {notes.length ? (
          notes.map(({ _id, note }, i) => (
            <NoteContainer
              key={i}
              note={note}
              id={_id}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))
        ) : (
          <div className="text-gray-500">No notes are available.</div>
        )}
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
