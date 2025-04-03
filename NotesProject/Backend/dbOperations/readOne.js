const read = require("./read.js");

module.exports= async (id) => {
  try {
    const notes = await read();
    const desiredNote = notes.find((note) => note.id === id);
    return desiredNote;
  } catch (error) {
    throw new Error(error.message);
  }
};
