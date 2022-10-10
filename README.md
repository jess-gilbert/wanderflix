# wanderflix

## Front End

How to set up:
- Open the front-end folder in VS Code
- In your terminal run `npm install` 
- In your terminal run `npm start`

There is also a README from React inside this project for more information


## Back End

How to set up:
- Open the back-end folder in VS Code
- In your terminal run `npm install` 
- In your terminal run `node app.js`


## Database

wanderflix database has been created.

users 
- user_email varchar(100) can not be null
- user_password varchar(15) can not be null

user_profile 
- user_email varchar(100) can not be null
- first_name varchar(50) can not be null
- last_name varchar(50) can not be null
- date_of_birth date
- gender varchar(1)
- user_language varchar(50)

watchlist 
- movie_id varchar(50) can not be null
- user_email varchar(50) can not be null


