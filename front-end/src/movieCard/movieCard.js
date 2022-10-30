import { Axios } from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
// import MovieInfoControl from "../movieInfo/movieInfoControl";
import "./movieCard.css";
import axios from "axios";
import { Modal,show,Button} from 'react-bootstrap';
import {useState} from 'react';


export default function MovieCard({ movie }) {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist, userId } =
    useContext(GlobalContext);


  let savedMovie = watchlist.find((o) => o.id === movie.id);

  function onClickHeart() {
    let url = "";
    if (savedMovie) {
      axios({
        method: "delete",
        url: "http://127.0.0.1:4000/watchlist",
        data: {
          user_id: userId,
          movie_id: movie.id,
        },
      })
        .then((response) => {
          removeMovieFromWatchlist(movie);
        })
        .catch((err) => console.log(err));
    } else {
      axios({
        method: "post",
        url: "http://127.0.0.1:4000/watchlist",
        data: {
          user_id: userId,
          movie_id: movie.id,
        },
      })
        .then((response) => {
          addMovieToWatchlist(movie);
        })
        .catch((err) => console.log(err));
    }
}

  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return (
    <div className="card">
      <div className="image-container controls">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + "poster"}
        />
        <div className="overlay d-flex align-items-center justify-conter">
          {/* <MovieInfoControl /> */}
        </div>
        {/* <MovieInfoControl type = {type} movie={movie}/> */}

  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>

  <button 
  onClick={onClickHeart}>
  {savedMovie ? (
  <i className="fa-sharp fa-solid fa-heart remove-icon" />
  ) : (
  <i className="fa-sharp fa-regular fa-heart" />
  )} <br></br>Save
  </button>
  </div>

  <div className="card--content">
  <h3 className="card--title"> {movie.title} </h3>
  <div class="rating-bar">
  <small> RATING: {movie.vote_average} </small>
  </div>

  <Modal show = {show} onHide= {handleClose}>
  <Modal.Header closeButton>
  <Modal.Title> Movie Info</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <img
  className="modal--image"
  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
  alt={movie.title + "poster"}/>
  <h3 className="modal--title">{movie.title}</h3>
  <p><small>RELEASE DATE: {movie.release_date}</small></p>
  <div class="modal-rating-bar">
  <small>RATING: {movie.vote_average}</small>
  </div>
  <p className="card--desc">{movie.overview}</p>
 
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>Close</Button>
  </Modal.Footer>        
  </Modal>



  </div>
  </div>
  );
}
