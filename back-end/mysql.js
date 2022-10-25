import mysql from "mysql2";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wanderflix",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Wanderflix back end listening on port ${port}`);
});

app.post("/signup", function (req, res) {
  console.log("req ->" + req.body);
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let user_email = req.body.user_email;
  let user_password = req.body.user_password;

  if (first_name && last_name && user_email && user_password) {
    con.query(
      "INSERT INTO users (first_name, last_name,user_email,user_password) VALUES (?,?,?,?) ",
      [first_name, last_name, user_email, user_password],
      function (error, results, fields) {
        if (error) {
          if (error?.errno === 1062) {
            res.statusCode = 403;
            res.send("This account already exists ");

            console.log(error);
          } else {
            res.send(error);
          }
        } else if (results.insertId) {
          console.log(results.insertId);
          res.send("Signup successful");
        } else {
          res.statusCode = 400;
          res.send("Bad request");
        }
        res.end();
      }
    );
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
});

app.post("/signin", function (req, res) {
  console.log("req ->" + req.body);
  let user_email = req.body.user_email;
  let user_password = req.body.user_password;

  if (user_email && user_password) {
    con.query(
      "SELECT * FROM users WHERE user_email = ? AND user_password = ?",
      [user_email, user_password],
      function (error, results, fields) {
        if (error) throw error; // Change to res.send error instead

        if (results.length > 0) {
          res.send("Login successful");
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.statusCode = 400;
    res.send("Please enter Username and Password!");
    res.end();
  }
});

app.post("/watchlist", function (req, res) {
  console.log("req ->" + req.body);
  let movie_id = req.body.movie_id;
  let user_id = req.body.user_id;

  if (movie_id && user_id) {
    con.query(
      "INSERT INTO user_watchlist (movie_id, user_id) VALUES (?,?) ",
      [movie_id, user_id],
      function (error, results, fields) {
        if (error) throw error; // Change to res.send error instead

        if (results.insertId) {
          console.log(results.insertId);
          res.send("successful");
        } else {
          res.statusCode = 400;
          res.send("Bad request");
        }
        res.end();
      }
    );
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
});




app.delete("/watchlist", function (req, res) {
  console.log("req ->" + req.body);
  let movie_id = req.body.movie_id;
  let user_id = req.body.user_id;

  if (movie_id && user_id) {
    con.query(
      "DELETE FROM user_watchlist WHERE movie_id = ? AND user_id = ? ",
      [movie_id, user_id],
      function (error, results, fields) {
        if (error) {
          console.log("Error while deleting the object")
          console.log(error)
          res.statusCode = 500
          res.send("Error");
        }
        else if(results.affectedRows =! '0') {
          console.log("Item deleted");
          res.statusCode = 202
          res.send("Deleted");
        }
        else {
          console.log("nothing to delete")
          res.statusCode = 200
          res.send("");
        }
      }
    );
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
});


// app.post("/review", function (req, res) {
//   console.log("req ->" + req.body);
//   let star_rating = req.body.star_rating;
//   let user_id = req.body.user_id;
//   let movie_id = req.body.movie_id;



//   if (star_rating && user_id && movie_id) {
//     con.query(
//       "INSERT INTO user_review (star_rating, user_id, movie_id) VALUES (?,?,?) ",
//       [star_rating, user_id, movie_id],
//       function (error, results, fields)   {
//         if (error) throw error;   

//         if (results.insertId) {
//           console.log(results.insertId);
//           res.send("successful");
//         } else {
//           res.statusCode = 400;
//           res.send("Bad request");
//         }
//         res.end();
//       }
//     );
//   } else {
//     res.statusCode = 400;
//     res.send("Bad request");
//     res.end();
//   }
// });
