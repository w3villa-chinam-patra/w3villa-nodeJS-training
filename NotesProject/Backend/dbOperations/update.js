const fs = require("node:fs/promises");
const read  = require("./read.js");
const { getDbUri } = require("./dbUri.js");

module.exports = async (updatedNote) => {
  try {
    const notes = await read();
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    await fs.writeFile(getDbUri(), JSON.stringify(updatedNotes));
    return `note updated successfully having id: ${updatedNote.id}`;
  } catch (error) {
    throw new Error(error.message);
  }
};
