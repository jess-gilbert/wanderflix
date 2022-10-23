import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./movieCard.css";

export default function MovieCard({ movie }) {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist } =
    useContext(GlobalContext);

  let savedMovie = watchlist.find((o) => o.id === movie.id);

  function onClickHeart() {
    savedMovie ? removeMovieFromWatchlist(movie) : addMovieToWatchlist(movie);
  }

  return (
    <div className="card">
      <div className="controls">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + "poster"}
        />

        <div className="card--content">
          <h3 className="card--title">{movie.title}</h3>
          {/* <p><small>RELEASE DATE: {movie.release_date}</small></p> */}
          <div class="rating-bar">
            <small>RATING: {movie.vote_average}</small>
            <button onClick={onClickHeart}>
              {savedMovie ? (
                <i className="fa-sharp fa-solid fa-heart remove-icon" />
              ) : (
                <i className="fa-sharp fa-regular fa-heart" />
              )}
            </button>
          </div>
          {/* <p className="card--desc">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
}
