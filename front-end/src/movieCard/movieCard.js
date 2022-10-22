import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./movieCard.css";

export default function MovieCard({ movie }) {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let savedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = savedMovie ? true : false;

  return (
    <div className="card">
      <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}
        >
          <i class="fa-sharp fa-solid fa-heart"></i> SAVE TO WATCHLIST
        </button>

        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + "poster"}
        />

        <div className="card--content">
          <h3 className="card--title">{movie.title}</h3>
          {/* <p><small>RELEASE DATE: {movie.release_date}</small></p> */}
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          {/* <p className="card--desc">{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
}
