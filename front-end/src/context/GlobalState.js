import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist:  localStorage.getItem('watchlist') 
  ? JSON.parse(localStorage.getItem('watchlist'))
  : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
  localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

// actions
const saveMovieToWatchlist = movie => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
};

  return (
    <GlobalContext.Provider 
   
    // value ={{value:[state,dispatch], value2:{watchlist: state.watchlist, 
    //   saveMovieToWatchlist,}}}
    
    value={{ 
      watchlist: state.watchlist, 
      saveMovieToWatchlist,
      }}
    >

    {props.children}
    </GlobalContext.Provider>
  )
  };

