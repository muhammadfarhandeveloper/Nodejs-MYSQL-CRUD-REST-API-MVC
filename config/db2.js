const mysql = require("mysql2/promise");


const db2 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

db2.getConnection()
    .then(() => console.log("DB2 Connected"))
    .catch((err) => console.error("DB2 Connection Error:", err));
    

module.exports = db2;