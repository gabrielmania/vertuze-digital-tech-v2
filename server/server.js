const express = require("express");
const connectDb = require("./utils/connectDb");
const Movie = require("./models/movie");
const Series = require("./models/series");

const app = express();

// Connect to database
connectDb();

// /movies routes will get all the movies in the database
app.get("/movies", async (req, res) => {
  // Set Access-Control-Allow-Origin to "*" to allow request from any domain
  res.set("Access-Control-Allow-Origin", "*");
  const movies = await Movie.find();
  res.send(movies);
});

// /series routes will get all the series in the database
app.get("/series", async (req, res) => {
  const series = await Series.find();
  res.send(series);
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
