import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);

  const SearchBar = async (e) => {
    e.preventDefault();
    navigate(`/ResultPage/${query}`);
  };

  return (
    <>
      <form className="form" onSubmit={SearchBar}>
        <label className="label" htmlFor="query"></label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search your favourite place...i.e. Tokyo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          TAKE ME THERE
        </button>
      </form>
    </>
  );
}
