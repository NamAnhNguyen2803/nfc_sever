var User = require('../models/user.model');


//GET method
// req_body needs a atribute describing id to get in4 from fb
let getAllInforOfUserId = async(req,res)=>{ 
    var id = req.params.id;
    
    let personalInfor = [];

    //getting personalInfor
    User.getById(id, (data)=>{
        personalInfor = Object.values(JSON.parse(JSON.stringify(data)));
        console.log({personal_in4: personalInfor});
    });

    // data is undefinding
    const userData = {
        personalInfor,
    }

    console.log((userData.personalInfor));
    
    console.log(userData);

    res.status(200).json(Object.values(JSON.parse(JSON.stringify(personalInfor))));
};


module.exports = {
    getAllInforOfUserId
}