const Word = require("../models/word.model");
const getWord = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const getSingleword = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findById(id);
    res.status(200).json(word);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const updateword = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findByIdAndUpdate(id, req.body);
    if (!word) {
      res.status(404).json({ message: "word doesn't exist" });
    }
    const updateword = await Word.findById(id);
    res.status(200).json(updateword);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const deleteword = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findByIdAndDelete(id);
    if (!word) {
      res.status(404).json({ message: "word doesn't exist" });
    }
    const updateword = await Word.findById(id);
    res.status(200).json({ message: "word deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const createword = async (req, res) => {
  try {
    const word = await Word.create(req.body);
    res.status(200).json(word);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports = {
  getWord,
  getSingleword,
  updateword,
  deleteword,
  createword,
};
