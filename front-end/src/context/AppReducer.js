export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.movie, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.movie.id
        ),
      };
    case "SET_USER_SIGNED_IN":
      return {
        ...state,
        userSignedIn: action.userSignedIn,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};
