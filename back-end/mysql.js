import mysql from "mysql2";
import express from "express";
import bodyParser from "body-parser";
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
        if (error) throw error;

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
