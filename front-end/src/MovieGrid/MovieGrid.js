import React from "react";
import MovieCard from "../movieCard/movieCard";
import "./MovieGrid.css";

export default function MovieGrid({ movies, title }) {
  return (
    <>
      <div className="center-max-size">
        <h1 className="results-title">{title}</h1>
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
}
