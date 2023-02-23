const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./utils/connectDb");
const Movie = require("./models/movie");
const Series = require("./models/series");

const app = express();

connectDb();

app.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
