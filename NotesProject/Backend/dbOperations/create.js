import fs from "node:fs/promises";
import { read, db } from "./index.js";

export default async (note) => {
  try {
    const notes = await read();
    notes.push({ id: crypto.randomUUID(), note });
    await fs.writeFile(db, JSON.stringify(notes));
    return "note inserted successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
