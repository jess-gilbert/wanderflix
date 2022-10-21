export const userSignedIn = (payload) => {
  return { type: "user_signed_in", payload: payload };
};

export const addMovieToWatchlist = (payload) => {
  return { type: "Add_Movie_To_Watchlist", payload: payload };
};
