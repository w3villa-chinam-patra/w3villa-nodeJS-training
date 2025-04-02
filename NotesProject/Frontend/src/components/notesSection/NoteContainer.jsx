import React from "react";

function NoteContainer({ note, id, deleteHandler, editHandler }) {
  return (
    <div className="px-2 py-4 border-2 bg-cyan-100 border-cyan-300 rounded-b-2xl max-w-xs text-slate-600">
      {note}
      <div className="buttons flex gap-2 justify-end mt-6">
        <button
          title="Click to edit this note"
          className="bg-emerald-200 text-sm text-emerald-600 px-2 border-2 border-emerald-400 rounded-b-xl cursor-pointer"
          onClick={() => editHandler({ id, note })}
        >
          Edit
        </button>
        <button
          title="Click to delete this note"
          className="bg-red-200 text-sm text-red-500 px-2 border-2 border-red-400 rounded-b-xl cursor-pointer"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteContainer;
