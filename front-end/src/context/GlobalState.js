import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  userSignedIn: false,
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
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

  const actions = {
    addMovieToWatchlist: (payload) => {
      dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: payload });
    },
    removeMovieFromWatchlist: (payload) => {
      dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: payload });
    },
    setUserSignedIn: (payload) => {
      dispatch({ type: "SET_USER_SIGNED_IN", payload: payload });
    },
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
