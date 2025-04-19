import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

const { initDb, getDb } = (() => {
  let db;

  return {
    initDb: async () => {
      db = await open({
        filename: path.resolve("src", "database", "database.sqlite"),
        driver: sqlite3.Database,
      });
    },

    getDb: () => db,
  };
})();

export { initDb, getDb };
