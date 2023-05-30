var mysql = require('mysql2/promise');

var dbCon = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nfc_customer_infor",
});

module.exports = dbCon;