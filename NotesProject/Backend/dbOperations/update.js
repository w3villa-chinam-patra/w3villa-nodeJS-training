import fs from "node:fs/promises";
import { db, read } from "./index.js";

export default async (updatedNote) => {
  try {
    const notes = await read();
    const updatedNotes = notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
    );
    await fs.writeFile(db, JSON.stringify(updatedNotes));
    return `note updated successfully having id: ${updatedNote.id}`;
  } catch (error) {
    throw new Error(error.message);
  }
};
