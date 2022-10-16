import mysql from "mysql2";
import express from "express";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/signup", (req, res) => {
  con.query(
    `INSET INTO USERS (${req.first_name})`,
    function (err, results, fields) {
      err && console.log(err);
      results && res.send(results);
    }
  );
});
