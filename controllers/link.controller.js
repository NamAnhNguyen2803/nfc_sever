var Link = require('../models/link.model');

/*
*   API bcard
*/

exports.get_list = (req, res)=>{
    Link.getAllLinkInfor((data)=>{
        res.status(200).json({result : data});
    });
}

exports.detail = (req, res)=>{
    var id = req.params.id;
    Link.getById(id, (response) =>{
        res.status(200).json({result : response});
    });
}

exports.add_link = (req, res) => {
    var data = req.body;
    Link.create(data, (response)=>{
        res.status(200).json({result : response});
    });
} 

exports.remove_link = (req, res) =>{
    var id = req.params.id;
    Link.remove(id , (response)=>{
        res.status(200).json({result : response});
    })
}

exports.update_link = (req, res)=>{
    var data = req.body;
    Link.update(data, (response)=>{
        res.status(200).json({result: response});
    });
}