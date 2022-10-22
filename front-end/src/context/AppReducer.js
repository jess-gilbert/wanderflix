export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "SET_USER_SIGNED_IN":
      return {
        ...state,
        userSignedIn: action.payload,
      };
    default:
      return state;
  }
};
