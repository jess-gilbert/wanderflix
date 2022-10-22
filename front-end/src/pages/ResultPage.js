import React, { useState, useEffect } from "react";
import MovieCard  from "../movieCard/movieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ResultPage.css";

export default function ResultPage() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [results,setResults] = useState([]);

  const SearchBar = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d1a96bd28a613550710fa181a44fe9f9&language=en-US
    &query=${query}&page=1&include_adult=false`;
    console.log(url);

    if({query}.errors){
      setResults({query},results);
    } else {setResults([]);}

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

  return (
    <>
      <h1 className="results-title">Results : {query}</h1>
      <div className="center-max-size">
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
