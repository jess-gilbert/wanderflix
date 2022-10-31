import express from "express";
import * as userController from "../controller/user.js";
import * as watchlistController from "../controller/watchlist.js";


export const router = express.Router();

/* User routes */
router.post("/signin", userController.signin);
router.post("/signup", userController.signUp);

/* Watchlist routes */
router.post("/watchlist", watchlistController.watchlist);
router.delete("/watchlist", watchlistController.removeWatchlist);
router.get("/watchlist/:user_id", watchlistController.getWatchlist);
