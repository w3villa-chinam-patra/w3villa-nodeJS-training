const { create, read, readOne, update, del } = require("../dbOperations");

module.exports = {
  create: async (req, res) => {
    const { note } = req.body;
    try {
      const isTrue = false;
      if(isTrue) {
        return res.status(500).json({"message":"Error"})
      }
      return res.status(200).json({ message: await create(note) });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  getAllNotesHandler: async (req, res) => {
    try {
      const notes = await read();
      return res.status(200).json(notes);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  getNoteByIdHandler: async (req, res) => {
    const id = req.params.id;
    try {
      const desiredNote = await readOne(id);
      return res.status(200).json(desiredNote);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  updateNoteHandler: async (req, res) => {
    const updatedNote = req.body;
    try {
      return res.status(200).json({ message: await update(updatedNote) });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  deleteNoteByIdHandler: async (req, res) => {
    const id = req.params.id;
    try {
      return res.status(200).json({ message: await del(id) });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
