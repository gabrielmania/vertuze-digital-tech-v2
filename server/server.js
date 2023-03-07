const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const Movie = require("./models/movie");
const Series = require("./models/series");

const app = express();

// Provide access to all cors
app.use(cors());

// Connect to database
connectDb();

// @notice /movies route will get all the movies in the database.
app.get("/movies", async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});

// @notice /movies:movieId route will get the detials for the specified movie.
app.get("/movies/:movieId", async (req, res) => {
    const { movieId } = req.params;
    const movie = await Movie.findOne({ _id: movieId });
    res.send(movie);
});

// @notice /series route will get all the series in the database.
app.get("/series", async (req, res) => {
    const series = await Series.find();
    res.send(series);
});

// @notice /series:seriesId route will get the detials for the specified series.
app.get("/series/:seriesId", async (req, res) => {
    const { seriesId } = req.params;
    const series = await Series.findOne({ _id: seriesId });
    res.send(series);
});

// Listen on port 3000.
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
