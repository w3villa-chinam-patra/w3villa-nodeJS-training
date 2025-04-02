import read from "./read.js";
import create from "./create.js";
import update from "./update.js";
import del from "./delete.js";
import readOne from "./readOne.js";

let db;

const setDB = (url) => {
  db = url;
};

export { db, setDB, read, create, update, del, readOne };
