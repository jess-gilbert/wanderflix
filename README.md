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
- user_id varchar (15) can not be null / PRIMARY KEY , UNIQUE KEY
- user_email varchar(100) can not be null / UNIQUE KEY
- user_password varchar(15) can not be null


user_profile 
- user_id varchar(15) can not be null / PRIMARY KEY, UNIQUE KEY
- first_name varchar(50) can not be null
- last_name varchar(50) can not be null
- user_language varchar(50)

user_watchlist 
- user_id varchar (15) can not be null / UNIQUE KEY
- movie_id varchar(50) can not be null / UNIQUE KEY
- watchlist_id varchar (15) can not be null / PRIMARY KEY

user_review
- user_id varchar (15) can not be null  
- movie_id varchar (15) can not be null
- review_id varchar (15) can not be null / PRIMARY KEY, UNIQUE KEY
- star_rating varchar(5)
- user_comment varchar(200)




