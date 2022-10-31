import connection from "../config/database.js";

/* INSERT WATCHLIST CONTROLLER*/

export const watchlist = async (req, res) => {
  const movie_id = req.body.movie_id;
  const user_id = req.body.user_id;

  if (movie_id && user_id) {
    try {
      await connection
        .promise()
        .query("INSERT INTO user_watchlist (movie_id, user_id) VALUES (?,?) ", [
          movie_id,
          user_id,
        ])
        .then(() => {
          console.log("Movie Added");
          res.send({ movieId: movie_id });
        });
    } catch (error) {
      if (error) {
        if (error?.errno === 1062) {
          res.statusCode = 403;
          res.send("Duplicate Entry");
          console.log(error);
        } else {
          res.send(error);
        }
      }
    }
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
};

/* REMOVE FROM WATCHLIST CONTROLLER*/

export const removeWatchlist = async (req, res) => {
  const movie_id = req.body.movie_id;
  const user_id = req.body.user_id;

  if (movie_id && user_id) {
    try {
      await connection
        .promise()
        .query(
          "DELETE FROM user_watchlist WHERE movie_id = ? AND user_id = ? ",
          [movie_id, user_id]
        )
        .then((result) => {
          if (result[0].affectedRows != 0) {
            console.log("Item deleted");
            res.send("Deleted");
            res.statusCode = 202;
          } else {
            console.log("nothing to delete");
            res.statusCode = 200;
            res.send("nothing to delete");
          }
        });
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
};

/* GET FROM WATCHLIST CONTROLLER*/

export const getWatchlist = async (req, res) => {
  console.log(req.params);
  const user_id = parseInt(req.params.user_id);

  if (user_id) {
    try {
      await connection
        .promise()
        .query("SELECT movie_id FROM user_watchlist WHERE user_id = ?", [
          user_id,
        ])
        .then((result) => {
          if (result) {
            res.statusCode = 200;
            res.send(result[0]);
            console.log("successful");
          }
        });
    } catch (error) {
      console.log("Error while getting the object");
      res.statusCode = 500;
      res.send(error);
    }
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
};
