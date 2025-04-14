const read = require("./read.js");

module.exports = async (id) => {
  const notes = await read();
  const desiredNote = notes.find((note) => note.id === id);
  return desiredNote;
};
