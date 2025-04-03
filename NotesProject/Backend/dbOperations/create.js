const fs = require("node:fs/promises");
const read = require("./read.js");
const { getDbUri } = require("./dbUri.js");

module.exports = async (note) => {
  try {
    const notes = await read();
    notes.push({ id: crypto.randomUUID(), note });
    await fs.writeFile(getDbUri(), JSON.stringify(notes));
    return "note inserted successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
