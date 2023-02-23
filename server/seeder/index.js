const mongoose = require("mongoose");
const axios = require("axios");
const connectDb = require("../utils/connectDb");
const Movie = require("../models/movie");
const Series = require("../models/series");
const movieGenres = require("./movieGenres");
const seriesGenres = require("./seriesGenres");

require("dotenv").config({ path: "../.env" });

/* 
  @notice {seedDb} will seed the MongoDB database with initial movie or series data

  @params {type} is either "movie" or "tv". URL will change depending on the argument
  passed to the function.
*/
async function seedDb(type) {
  const baseUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.MOVIEDB_API}&page=`;

  if (type === "movie") {
    // Delete any entries in the Movie collection
    await Movie.deleteMany();

    // Loop through the pages of the URL
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(`${baseUrl}${i + 1}`);

      // Loop through every data in the {response}
      for (const movieData of response.data.results) {
        // Loop through the {genre_ids} in the response result and change every IDs
        // to the corresponding name as indicated in {movieGenres}
        for (let i = 0; i < movieData.genre_ids.length; i++) {
          const el = movieData.genre_ids[i];

          for (const genre of movieGenres) {
            if (genre.id === el) {
              movieData.genre_ids.splice(i, 1, genre.name);
            }
          }
        }

        // Create a new Movie model as {movie}
        const movie = new Movie({
          genre: movieData.genre_ids,
          language: movieData.original_language,
          title: movieData.title,
          overview: movieData.overview,
          imgSrc: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
          releaseDate: movieData.release_date,
          price: Math.floor(Math.random() * 100) + 100,
        });

        // Save {movie} to the database
        await movie.save();
      }
    }
  }

  if (type === "tv") {
    // Delete any entries in the Series collection
    await Series.deleteMany();

    // Loop through the pages of the URL
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(`${baseUrl}${i + 1}`);

      // Loop through every data in the {response}
      for (const seriesData of response.data.results) {
        // Loop through the {genre_ids} in the response result and change every IDs
        // to the corresponding name as indicated in {movieGenres}
        for (let i = 0; i < seriesData.genre_ids.length; i++) {
          const el = seriesData.genre_ids[i];

          for (const genre of seriesGenres) {
            if (genre.id === el) {
              seriesData.genre_ids.splice(i, 1, genre.name);
            }
          }
        }

        // Create a new Movie model as {movie}
        const series = new Series({
          firstAirDate: seriesData.first_air_date,
          genre: seriesData.genre_ids,
          name: seriesData.name,
          country: seriesData.origin_country[0],
          language: seriesData.original_language,
          overview: seriesData.overview,
          imgSrc: `https://image.tmdb.org/t/p/original${seriesData.poster_path}`,
          price: Math.floor(Math.random() * 200) + 200,
        });

        // Save {movie} to the database
        await series.save();
      }
    }
  }
}

connectDb()
  .then(() => seedDb("movie"))
  .then(() => seedDb("tv"))
  .then(() => {
    mongoose.connection.close();
    console.log("Connection closed...");
  });
