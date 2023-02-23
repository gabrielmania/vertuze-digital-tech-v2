const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

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

const Series = models.Series || model("Series", seriesSchema);

module.export = Series;
