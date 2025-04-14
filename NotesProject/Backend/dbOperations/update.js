const fs = require("node:fs/promises");
const read = require("./read.js");
const { getDbUri } = require("../database/dbConfig.js");

module.exports = async (updatedNote) => {
  const notes = await read();
  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
  );
  await fs.writeFile(getDbUri(), JSON.stringify(updatedNotes));
  return updatedNote;
};
