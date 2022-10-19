import React, {createContext,useReducer, useEffect}from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist:[],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// actions
const addMovieToWatchlist = movie => {
    dispatch({type: "Add_Movie_To_Watchlist", payload: movie});
    };

return (
    <GlobalContext.Provider value={{ watchlist: state.watchlist, addMovieToWatchlist}}>
        {props.children}
    </GlobalContext.Provider>
    ) 
};
