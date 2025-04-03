const fs = require("node:fs/promises");
const { getDbUri } = require("./dbUri.js");

module.exports = async () => {
  const notes = await fs.readFile(getDbUri());
  return JSON.parse(notes.toString());
};
