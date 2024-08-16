const mongoose = require("mongoose");
const WordShema = mongoose.Schema(
  {
    first_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    first_word_result: [String],
    second_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    second_word_result: [String],
    third_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    third_word_result: [String],
    fourth_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    fourth_word_result: [String],
    fifth_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    fifth_word_result: [String],
    sixth_word: [
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
      { id: Number, name: String },
    ],
    sixth_word_result: [String],
  },
  {
    timestamps: true,
  }
);
const Word = mongoose.model("worddata", WordShema);
module.exports = Word;
