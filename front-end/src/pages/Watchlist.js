import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return <MovieGrid movies={watchlist} title="Watchlist" />;
}
