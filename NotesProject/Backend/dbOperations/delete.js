const read = require("./read.js");
const { getDbUri } = require("./dbUri.js");
const fs = require("node:fs/promises");

module.exports = async (id) => {
  try {
    const notes = await read();
    const updatedNotes = notes.filter((note) => note.id !== id);
    await fs.writeFile(getDbUri(), JSON.stringify(updatedNotes));
    return `note deleted successfully with id: ${id}`;
  } catch (error) {
    throw new Error(error.message);
  }
};
