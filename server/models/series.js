const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

// Create new schema for Series model
const seriesSchema = new Schema({
  firstAirDate: String,
  genre: Array,
  name: String,
  country: String,
  language: String,
  overview: String,
  imgSrc: String,
  price: Number,
});

// Checks if db already has Series collection. If not, it will create new collection.
const Series = models.Series || model("Series", seriesSchema);

module.exports = Series;
