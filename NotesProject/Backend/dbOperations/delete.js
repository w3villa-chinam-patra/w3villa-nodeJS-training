const read = require("./read.js");
const { getDbUri } = require("../database/dbConfig.js");
const fs = require("node:fs/promises");

module.exports = async (id) => {
  const notes = await read();
  const updatedNotes = notes.filter((note) => note.id !== id);
  await fs.writeFile(getDbUri(), JSON.stringify(updatedNotes));
  return true;
};
