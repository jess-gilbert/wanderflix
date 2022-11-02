import connection from "../config/database.js";

/* Signin Controller Function */

export const signin = async (req, res) => {
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;

  if (user_email && user_password) {
    try {
      await connection
        .promise()
        .query(
          "SELECT user_id as userId FROM users WHERE user_email = ? AND user_password = ?",
          [user_email, user_password]
        )
        .then((result) => {
          if (result) {
            if (result[0][0]) {
              res.statusCode = 200;
              res.send(result[0][0]);
              console.log("successful");
              console.log(result);
            } else {
              res.statusCode = 401;
              res.send("Incorretct Username and/or Password!");
              console.log("Incorretct Username and/or Password!");
            }
          }
        });
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  } else {
    res.statusCode = 400;
    res.send("Please enter Username and Password!");
    res.end();
  }
};

/*SignUp Controller Function  */

export const signUp = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;

  if (first_name && last_name && user_email && user_password) {
    try {
      await connection
        .promise()
        .query(
          "INSERT INTO users (first_name, last_name,user_email,user_password) VALUES (?,?,?,?) ",
          [first_name, last_name, user_email, user_password]
        )
        .then((result) => {
          res.send("Signup successful");
        });
    } catch (error) {
      if (error) {
        if (error?.errno === 1062) {
          res.statusCode = 403;
          res.send("This account already exists ");

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
