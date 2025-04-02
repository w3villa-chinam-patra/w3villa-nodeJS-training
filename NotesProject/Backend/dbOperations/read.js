import fs from "node:fs/promises";
import { db } from "./index.js";

export default async () => {
  const notes = await fs.readFile(db);
  return JSON.parse(notes.toString());
};
