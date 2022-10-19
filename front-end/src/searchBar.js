import React, {useState} from "react";
import MovieCard from "./movieCard/movieCard.js";
export default function SearchBar(){

    //states- input query, places
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate 
    const [movies, setMovies] = useState([]);

    const SearchBar = async (e) => {
        e.preventDefault();
        // console.log("submitting");

        // const query = "Tokyo";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d1a96bd28a613550710fa181a44fe9f9&language=en-US
        &query=${query}&page=1&include_adult=false`;

        try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.results); 
        setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}

    return (
        <>
            <form className="form" onSubmit={SearchBar}>
               <label className="label" htmlFor="query"></label>
               <input className="input" type="text" name="query"
                   placeholder="Search your favourite place...i.e. Tokyo"
                   value={query} onChange={(e) => setQuery(e.target.value)}
                   />
               <button className="button" type="submit">TAKE ME THERE</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
               ))}
    </div>
    </>
    )
}