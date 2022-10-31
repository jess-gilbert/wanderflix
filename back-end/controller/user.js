import connection from "../config/database.js";

/* Signin Controller Function */

export const signin = async (req, res) => {
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;

  if (user_email && user_password) {
    const users = await connection
      .promise()
      .query("SELECT * FROM users WHERE user_email = ? AND user_password = ?", [
        user_email,
        user_password,
      ]);

    if (users.length > 0) {
      res.send("Login successful");
      console.log("Login successful");
    } else {
      res.statusCode = 401;
      res.send("Incorrect Username and/or Password!");
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
        ).then(
          result => {
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
