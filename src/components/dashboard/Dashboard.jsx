import { useEffect, useState } from "react";
import axios from "axios";
import "../dashboard/Dashboard.css";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      url: "https://hoblist.com/api/movieList",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      },
    };

    axios(options)
      .then((response) => {
        setMovies(response.data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {" "}
      <h2>Movie List</h2>{" "}
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie }) {
  const {
    title,
    genre,
    director,
    starring,
    votes,
    mins,
    lang,
    releaseDate,
    views,
    watchTrailer,
  } = movie;

  return (
    <div className="movie-item">
      <div className="movie-poster">{/* Add image placeholder here */}</div>
      <div className="movie-info">
        <div className="movie-title">{title}</div>
        <div className="movie-genre">{genre}</div>
        <div className="movie-director">Director: {director}</div>
        <div className="movie-starring">Starring: {starring}</div>
        <div className="movie-details">
          <span>{votes} votes</span> | {mins} mins | {lang} | {releaseDate}
          <span className="movie-views">{views} views</span>
          {watchTrailer && (
            <a href={watchTrailer} target="_blank" rel="noopener noreferrer">
              Watch Trailer
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
