const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: String, // Campo con espacio
  year: Number,
  languages: Array,
});

module.exports = mongoose.model("Movies", moviesSchema);
