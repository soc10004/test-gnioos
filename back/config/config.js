const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    pass: "",
    database: "gnioos_test"
})
module.exports = {
    port: 3000 || process.env.PORT,
    sql: pool,
    secret: "@zizvrss@gmail.com"

}