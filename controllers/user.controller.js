var User = require('../models/user.model');

// GET method
exports.get_list = (req, res)=>{
    User.getAllUsersInfor((data)=>{
        // res.send({result : data});
        res.status(200).json({result : data});
    });
}

exports.detail = (req, res) =>{
    var id = req.params.id;
    User.getById(id, (response) =>{
        res.status(200).json({result : response});
    });
}

// POST method
exports.add_user = (req,res) =>{
    var data = req.body;
    User.create(data, (response) =>{
        res.status(200).json({result : response});
    });
}

// DELETE method
exports.remove_user = (req, res) => {
    var id = req.params.id;
    User.remove(id, (response)=>{
        res.status(200).json({result : response});
    });
}

// PUT method
exports.update_User = (req, res)=>{
    var data = req.body;
    User.update(data, (response) =>{
        res.status(200).json({result : response});
    });
}