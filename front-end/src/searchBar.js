import React, { useState } from "react";
// import MovieCard from "./movieCard/movieCard.js";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const SearchBar = async  (e) => {
    e.preventDefault();
    navigate(`/ResultPage/${query}`);

    if({query}.errors){
      setResults({query},results);
    } else {setResults([]);}
  };
  
  return (
    <>
      <form className="form" onSubmit={SearchBar}>
        <label className="label" htmlFor="query"></label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter your destination"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          className="button" type="submit">
          TAKE ME THERE
        </button>
      </form>
    </>
  );
}
