const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

// Create new schema for Movies model
const movieSchema = new Schema({
  genre: Array,
  language: String,
  title: String,
  overview: String,
  imgSrc: String,
  releaseDate: String,
  price: Number,
});

// Checks if db already has Movie collection. If not, it will create new collection.
const Movie = models.Movie || model("Movie", movieSchema);

module.export = Movie;
