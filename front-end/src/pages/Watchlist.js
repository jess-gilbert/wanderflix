import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../movieCard/movieCard";
import "./ResultPage.css";
import { Axios } from "axios";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  // const [movie_id, setMovie_id] = useState("");
  // const [user_id, setUser_id]  = useState ("");

// useEffect (() => {
//   Axios.get("http://127.0.0.1:4000/watchlist/api/insert").then((Response) => {
//     console.log (Response.data);
//   });
// }, []);


//   const saveToWatchlist = () => {
//       Axios. post ("http://127.0.0.1:4000/watchlist", {
//         movie_id : movie_id,
//         user_id : user_id,
//       }).then (() => { 
//         alert("Successful insert");
//       });
//       };
   

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
  };
