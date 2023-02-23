const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const movieSchema = new Schema({
  genre: Array,
  language: String,
  title: String,
  overview: String,
  imgSrc: String,
  releaseDate: String,
  price: Number,
});

const Movie = models.Movie || model("Movie", movieSchema);

module.export = Movie;
