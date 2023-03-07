import { Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/movies">
                    <Route index element={<Movies />} />
                    <Route path=":movieId" element={<MovieDetails />} />
                </Route>
                <Route path="/series">
                    <Route index element={<Series />} />
                    <Route path=":seriesId" element={<SeriesDetails />} />
                </Route>
                <Route path="/about" element={<h1>About Us</h1>} />
                <Route path="/contact" element={<h1>Contact Us</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/register" element={<h1>Register</h1>} />
            </Routes>
        </>
    );
}

export default App;
