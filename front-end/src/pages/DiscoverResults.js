import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function DiscoverResults() {
  const { city_id, city } = useParams();
  const [movies, setMovies] = useState([]);

  const CityResults = () => {
    const url = `https://api.themoviedb.org/3/keyword/${city_id}/movies?api_key=d1a96bd28a613550710fa181a44fe9f9&language=en-US&include_adult=false`;

    axios({
      method: "get",
      url: url,
    })
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    CityResults();
  }, [city_id]);

  return <MovieGrid movies={movies} title={`Discover: ${city}`} />;
}
