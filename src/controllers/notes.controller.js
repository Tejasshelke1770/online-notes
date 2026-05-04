import { notesModel } from "../models/notes.model.js";

export const getAllNotes = async (req, res) => {
  const notes = await notesModel.find();
  return res.status(200).json({
    success: true,
    notes,
  });
};

export const createNote = async (req, res) => {
  const { title, description } = req.body;

  const note = await notesModel.create({
    title,
    description,
  });

  return res.status(201).json({
    message: "note created ",
    note: {
      title: note.title,
      description: note.description,
    },
  });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  const updatedNote = await notesModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "note updated",
    updatedNote,
  });
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  const DeletedNote = await notesModel.findByIdAndDelete(id);

  return res.status(204).json({
    message: "note deleted",
  });
};
