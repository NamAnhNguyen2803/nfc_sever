var Bcard = require('../models/bcard.model');

/*
*   API bcard
*/

exports.get_list = (req, res)=>{
    Bcard.getAllBcardsInfor((data)=>{
        res.status(200).json({result : data});
    });
}

exports.detail = (req, res)=>{
    var id = req.params.id;
    Bcard.getById(id, (response) =>{
        res.status(200).json({result : response});
    });
}

exports.add_bcard = (req, res) => {
    var data = req.body;
    Bcard.create(data, (response)=>{
        res.status(200).json({result : response});
    });
} 

exports.remove_bcard = (req, res) =>{
    var id = req.params.id;
    Bcard.remove(id , (response)=>{
        res.status(200).json({result : response});
    })
}

exports.update_bcard = (req, res)=>{
    var data = req.body;
    Bcard.update(data, (response)=>{
        res.status(200).json({result: response});
    });
}