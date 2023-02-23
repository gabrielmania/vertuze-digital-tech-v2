const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./utils/connectDb");
const Movie = require("./models/movie");
const Series = require("./models/series");

const app = express();

// Connect to database
connectDb();

// @notice /movies routes will get all the movies in the database
app.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

// @notice /series routes will get all the series in the database
app.get("/series", async (req, res) => {
  const series = await Series.find();
  res.send(series);
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
