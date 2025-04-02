import express from "express";
import {
  setDB,
  read,
  create,
  update,
  del,
  readOne,
} from "./dbOperations/index.js";
import cors from "cors";

const app = express();
const PORT = 4000;

const DB_URL =
  "/home/w3villa/w3villa-nodeJS-training/NotesProject/Backend/database/notes.json";

setDB(DB_URL);

app.use(express.json());
app.use(cors());

app.get("/notes", async (req, res) => {
  try {
    const notes = await read();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const desiredNote = await readOne(id);
    return res.status(200).json(desiredNote);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
app.post("/notes", async (req, res) => {
  const { note } = req.body;
  try {
    res.status(200).json({ message: await create(note) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.put("/notes", async (req, res) => {
  const updatedNote = req.body;
  try {
    res.status(200).json({ message: await update(updatedNote) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).json({ message: await del(id) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server Started at: http://localhost:${PORT}`)
);
