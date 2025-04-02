import read from "./read.js";

export default async (id)=>{
   try {
    const notes = await read();
    const desiredNote = notes.find((note)=> note.id===id);
    return desiredNote;
   } catch (error) {
    throw new Error(error.message);
   }
}