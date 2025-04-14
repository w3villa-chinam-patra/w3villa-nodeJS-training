const { noteModel } = require("../models/");

// inserts note into the database
exports.insertNote = async (note, userId) => {
  return await noteModel.insertOne({
    note,
    createdBy: userId,
  });
};

// fetch user's notes from the database
exports.getAllNotesByUserId = async (userId) => {
  return await noteModel.find({ createdBy: userId });
};

// fetch note by id
exports.getNoteById = async (id) => {
  return await noteModel.findOne({ _id: id });
};

// update note by id
exports.updateNote = async (id, note) => {
  return await noteModel.updateOne({ _id: id }, { $set: { note } });
};

exports.deleteNote = async (id) => {
  return await noteModel.deleteOne({ _id: id });
};
