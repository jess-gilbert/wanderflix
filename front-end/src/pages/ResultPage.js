import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function ResultPage() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);

  const SearchBar = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d1a96bd28a613550710fa181a44fe9f9&language=en-US
    &query=${query}&page=1&include_adult=false`;

    axios({
      method: "get",
      url: url,
      data: {},
    })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    SearchBar();
  }, [query]);

  return <MovieGrid movies={movies} title={`Results: ${query}`} />;
}
