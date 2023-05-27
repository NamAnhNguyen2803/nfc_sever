var mysql = require('mysql');

var dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nfc_customer_infor",
});

dbCon.connect( (err) => {
    if(err) {
        console.log("Connected fail");
        return;
    }
    console.log ("connected success")
});

module.exports = dbCon;