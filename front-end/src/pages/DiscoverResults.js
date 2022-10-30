import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/movieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DiscoverResults.css";

export default function DiscoverResults() {

  const { city_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [results,setResults] = useState([]);

  const CityResults= () => {
    const url = `https://api.themoviedb.org/3/keyword/${city_id}/movies?api_key=d1a96bd28a613550710fa181a44fe9f9&language=en-US&include_adult=false`;
    console.log(url);

  if({city_id}.errors){
      setResults({city_id},results);
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
    CityResults();
  }, [city_id]);

  return (
    <>
      <h1 className="results-title"></h1>
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