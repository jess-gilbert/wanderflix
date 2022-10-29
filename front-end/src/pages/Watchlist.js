import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../movieCard/movieCard";
import "./ResultPage.css";
import { Axios } from "axios";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="center-max-size">
      <div className="card-list">
        {watchlist
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
