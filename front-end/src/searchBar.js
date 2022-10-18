import React from "react";

export default function SearchBar(){

    const SearchBar = async (e) => {
        e.preventDefault();
        console.log("submitting");
    }

    return (
        <form className="form" onSubmit={SearchBar}>
            <input className="input" type="text" name="query"placeholder="Search your favourite place...i.e. Tokyo"/>
            <button className="button" type="submit">TAKE ME THERE</button>
        </form>
    )
}