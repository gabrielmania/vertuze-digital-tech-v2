import { useState, useEffect } from "react";
import axios from "axios";

function Series() {
  // State for storing series
  const [series, setSeries] = useState([]);

  // Everytime the page is loaded it will request to the API for the initial series
  // to load for the page.
  useEffect(() => {
    axios.get("http://localhost:3000/series").then((response) => {
      setSeries(response.data);
    });
  }, []);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1 py-10 sm:w-8/12 md:w-11/12 mx-auto">
      {/* 
      Map through the {series} array and display the image, title and overview of
      the series to the div card.
      Key must be assigned to the parent element inside the return of the map method.
      In this case, <div> is the parent element and {i} is the key passed through it.
      */}
      {series.map((ser, i) => (
        <div
          key={i}
          className="card w-80 mx-auto sm:w-full bg-base-100 shadow-xl"
        >
          <figure>
            <img src={ser.imgSrc} alt={`${ser.title} Poster`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{ser.title}</h2>
            <p className="truncate">{ser.overview}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-warning bg-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series;
