export default (state, action) => {
    switch (action.type) {
        case "Add_Movie_To_Watchlist":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
        default:
            return state;
    }
};