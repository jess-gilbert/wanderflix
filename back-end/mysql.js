import mysql from "mysql2";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import queryString from "query-string";

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
          if (error) {
            console.log("Error while signin");
            console.log(error);
            res.statusCode = 500;
            res.send("Error");
        }

        if (results.length > 0) {
          res.send("Login successful");
        } else {
          res.statusCode = 401;
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
        if (error) {
          console.log("Error while adding the object");
          console.log(error);
          res.statusCode = 500;
          if ((error.errno = 1062)) {
            res.send("Duplicate entry");
          } else {
            res.send("Error");
          }
        } else if (results.insertId != 0) {
          console.log("Movie added");
          res.send("successful");
        } else {
          res.statusCode = 204;
          console.log("No Content");
          res.send("");
        }
        res.end();
      }
    );
  } else {
    console.log("Bad request");
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
          console.log("Error while deleting the object");
          console.log(error);
          res.statusCode = 500;
          res.send("Error");
        }
        if (results.affectedRows != "0") {
          console.log("Item deleted");
          res.statusCode = 202;
          res.send("Deleted");
        } else {
          console.log("nothing to delete");
          res.statusCode = 200;
          res.send("nothing to delete");
        }
      }
    );
  } else {
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
});


app.get("/watchlist", function (req, res) {

  const user_id = req.query.user_id ; 
 
  if (user_id) {
    con.query(
      "SELECT * FROM user_watchlist WHERE user_id = ?",
      [user_id],
      function (error, results, fields) {
        if (error) {
          console.log("Error while getting the object");
          console.log(error);
          res.statusCode = 500;
          res.send("Error while getting the object")
        } else if (results.length > 0) {
          console.log("sucsessful");
          console.log(results);
         // res.body = results;
          res.statusCode = 200;
          res.send(results);
        }
      }
    );
  } else {
    console.log("Bad request");
    res.statusCode = 400;
    res.send("Bad request");
    res.end();
  }
});