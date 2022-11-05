import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  userSignedIn: false,
  watchlist: [],
  userId: null,
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
    addMovieToWatchlist: (movie) => {
      dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", movie: movie });
    },
    removeMovieFromWatchlist: (movie) => {
      dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", movie: movie });
    },
    clearWatchlist: (movie) => {
      dispatch({ type: "CLEAR_WATCHLIST" });
    },
    setUserSignedIn: (userSignedIn) => {
      dispatch({ type: "SET_USER_SIGNED_IN", userSignedIn: userSignedIn });
    },
    setUserId: (userId) => {
      dispatch({ type: "SET_USER_ID", userId: userId });
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
