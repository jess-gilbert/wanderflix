# wanderflix

## Front End

How to set up:
- Open the front-end folder in VS Code
- In your terminal run `npm install` 
- In your terminal run `npm start`

- You will also need to install the following React libraries:

- In your terminal run 'npm i react-router-dom'
- In your terminal run 'npm i react-icons'
- In your terminal run 'npm i styled-components'

There is also a README from React inside this project for more information

## Back End

How to set up:
- Open the back-end folder in VS Code
- In your terminal run `npm install` 
- In your terminal run `node mysql.js` 
- Input your SQL password to connect with MySQL Workbench. 


## Database

wanderflix database has been created.

users 
- user_id INT can not be null / PRIMARY KEY / UNIQUE KEY / AI
- user_email varchar(100) can not be null / UNIQUE KEY
- user_password varchar(15) can not be null
- first_name varchar(50)
- last_name varchar (50)


user_watchlist 
- user_id INT can not be null / UNIQUE KEY
- movie_id varchar(50) can not be null / UNIQUE KEY
- watchlist_id INT (15) can not be null / PRIMARY KEY / UNIQUE KEY/ AI

user_review
- user_id INT can not be null  
- movie_id varchar (15) can not be null
- review_id INT can not be null / PRIMARY KEY/ UNIQUE KEY / AI
- star_rating varchar(5)
- user_comment varchar(200)

## POSTMAN
-Postman folder created. Import code on your Postman workspace.





