var User = require('../models/user.model');
var dbCon = require('../ultiz/DbConnect')


//GET method
// req_body needs a atribute describing id to get in4 from fb
let getAllInforOfUserId = async(req,res)=>{ 
    var id = req.params.id;
    
    let personalInfor = {};

    const [rows, fields] = await dbCon.execute(
        "SELECT * FROM `users` WHERE `id` = ?",
        [id]);

    // data is undefinding
    const userData = {
        personalInfor : rows,
    }

    res.status(200).json({userData});
};


let getAllFromBb = async() =>{
    const [users, users_fields] = await dbCon.execute(
        "SELECT * FROM `users`");
    const [bcards, bcards_fields] = await dbCon.execute(
        "SELECT * FROM `bcards`");
    const [designs, design_fields] = await dbCon.execute(
        "SELECT * FROM `bcards`");
    const [links, links_fields] = await dbCon.execute(
        "SELECT * FROM `links`");
    const [acounts, acounts_fields] = await dbCon.execute(
        "SELECT * FROM `acounts`");
}


module.exports = {
    getAllInforOfUserId
}