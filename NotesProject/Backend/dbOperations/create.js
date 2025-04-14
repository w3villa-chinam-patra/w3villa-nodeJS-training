const fs = require("node:fs/promises");
const read = require("./read.js");
const { getDbUri } = require("../database/dbConfig.js");

module.exports = async (note) => {
    const notes = await read();
    notes.push({ id: crypto.randomUUID(), note });
    await fs.writeFile(getDbUri(), JSON.stringify(notes));
    return note;
};
