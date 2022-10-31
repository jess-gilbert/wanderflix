import mysql from "mysql2";

import { config } from "../config/mysql-config.js";

const connection = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

export default connection;
