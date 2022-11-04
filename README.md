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
- In your terminal run 'npm install react-bootstrap bootstrap'

There is also a README from React inside this project for more information

## Back End

How to set up:
- Open the back-end folder in VS Code
- In your terminal run `npm install` 
- In your terminal run `node server.js`
- Input your SQL password to connect with MySQL Workbench. 

Config:
- database.js : Database connection function.
- mysql-config.js : Keeps the configs about mysql connection.

Controller:
- user.js is for user operations
- watchlist.js for watchlist functions.

Routes 
- router.js is general router for all the requests. 

How to run back-end tests:
-In your terminal run `npm test`

## Database

wanderflix database has been created.

users 
- user_id INT can not be null / PRIMARY KEY / UNIQUE KEY / AI
- user_email varchar(100) can not be null / UNIQUE KEY
- user_password varchar(15) can not be null
- first_name varchar(50)
- last_name varchar (50)


user_watchlist 
- user_id INT can not be null 
- movie_id varchar(50) can not be null / UNIQUE KEY
- watchlist_id INT (15) can not be null / PRIMARY KEY / UNIQUE KEY/ AI


## POSTMAN
-Postman folder created. Import code on your Postman workspace.





