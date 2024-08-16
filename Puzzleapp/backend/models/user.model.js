const mongoose = require("mongoose");
const WordShema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      default: null,
      sparse: true,
    },
    password: {
      type: String,

      default: null,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);
const Word = mongoose.model("worddata", WordShema);
module.exports = Word;
