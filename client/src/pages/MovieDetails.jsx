import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// @dev {useParams} hook will take the params used for the page and use it in the
// page as a reference.
function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    // Fetch the movie details based on the {movieId} passed and assign it to the
    // {movie} variable.
    useEffect(() => {
        axios
            .get(`http://localhost:3000/movies/${movieId}`)
            .then((response) => {
                setMovie(response.data);
            });
    }, []);

    return (
        <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <div className="card lg:card-side bg-base-100 shadow-xl my-10 mx-auto w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 border">
                <img
                    src={movie.imgSrc}
                    alt={`${movie.title} Poster`}
                    className="lg:w-4/12 rounded-2xl"
                />
                <div className="card-body">
                    <h2 className="card-title text-5xl">{movie.title}</h2>
                    <p className="grow-0">
                        <span className="font-bold">Overview:</span>{" "}
                        {movie.overview}
                    </p>
                    <p className="grow-0">
                        <span className="font-bold">Genre:</span>{" "}
                        {/*
              Map through the {movie.genre} array and display each genre as a word
              followed by a comma ",". If it is the last element in the {movie.genre}
              the word should not have a comma "," included.
            */}
                        {movie.genre?.map((genre, i) =>
                            i === movie.genre.length - 1
                                ? `${genre}`
                                : `${genre}, `
                        )}
                    </p>
                    <p className="grow-0">
                        <span className="font-bold">Release Date:</span>{" "}
                        {movie.releaseDate}
                    </p>
                    <p className="grow-0">
                        <span className="font-bold">Language:</span>{" "}
                        {movie.language}
                    </p>
                    <div className="card-actions justify-center lg:justify-start">
                        <button className="btn btn-warning bg-primary">
                            Purchase Now! Php {movie.price}.00
                        </button>
                        <button className="btn btn-outline btn-warning">
                            Back
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MovieDetails;
