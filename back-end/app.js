import express from "express";
import mysql_controller from "mysql.js"
// const mysql_controller = import("../back-end/mysql")

const app = express();
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
