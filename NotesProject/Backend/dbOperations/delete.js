import { db, read } from "./index.js";
import fs from "node:fs/promises";

export default async(id)=>{
    try {
        const notes = await read();
        const updatedNotes = notes.filter((note)=>note.id!==id);
        await fs.writeFile(db,JSON.stringify(updatedNotes));
        return `note deleted successfully with id: ${id}`;
    } catch (error) {
        throw new Error(error.message);
    }
}