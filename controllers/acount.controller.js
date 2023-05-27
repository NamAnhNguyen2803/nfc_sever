var Acount = require('../models/acount.model');

var acount  = new Acount("khanhdenqua","1",
    "khongbietcophaitoiyeuemhaykhongnua", "1", "32/13/2222",
    "32/13/2222");

/*
*   API acount
*/

// GET method
exports.get_list = (req, res)=>{
    Acount.getAllAcountsInfor((data)=>{
        // res.send({result : data});
        res.status(200).json({result : data[0]});
    });
}

exports.detail = (req, res) =>{
    var id = req.params.id;
    Acount.getById(id, (response) =>{
        res.status(200).json({result : response});
    });
}

// POST method
exports.add_acount = (req,res) =>{
    var data = req.body;
    Acount.create(data, (response) =>{
        res.status(200).json({result : response});
    });
}

// DELETE method
exports.remove_acount = (req, res) => {
    var id = req.params.id;
    Acount.remove(id, (response)=>{
        res.status(200).json({result : response});
    });
}

// PUT method
exports.update_acount = (req, res)=>{
    var data = req.body;
    Acount.update(data, (response) =>{
        res.status(200).json({result : response});
    });
}