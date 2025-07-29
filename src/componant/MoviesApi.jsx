import React, { useEffect, useState } from "react";
import "./MoviesApi.css";

const MoviesApi = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${count}`
    )
      .then((request) => request.json())
      .then((response) => {
        setMoviesData([...moviesData, ...response.results]);
      });
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  console.log(moviesData);

  return (
    <div className="heroSection">
      <div className="heading">
        <a href="#home"><h1>movies Buzz</h1></a>
      </div>

      <div id="home" className="container">
        {moviesData.map((element, index) => (
          <div className="movieBox" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.title}
              loading="lazy"
            />
            <h1>{element.title}</h1>
            <p>
              Release:{" "}
              {element.release_date
                ? new Date(element.release_date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "Unknown"}
            </p>

            <p>Rating : {element.vote_average.toFixed(1)}</p>
            <p>
              Popularity: {element.popularity.toFixed(1)}{" "}
              {element.popularity > 250 && (
                <span>🔥 Trending</span>
              )}
            </p>
            <p>{element.overview.slice(0, 50)}</p>
          </div>
        ))}
      </div>

      <div id="showMore" className="showMoreBtn">
        <button onClick={handleCount}>Show More</button>
      </div>

      <a id="down" href="#showMore"><button>scroll down</button></a>
    </div>
  );
};

export default MoviesApi;
