var Design = require('../models/design.model');

exports.get_list = (req,res)=>{
    Design.getAllLinkInfor((data)=>{
       res.status(200).json({result : data}); 
    });
}

exports.detail = (req,res) =>{
    var id = req.params.id;
    Design.getById(id, (data) =>{
        res.status(200).json({result : data}); 
    });
}

exports.add_design = (req,res)=>{
    var data = req.body;
    Design.create(data, (response)=>{
        res.status(200).json({result : response}); 
    });
}

exports.remove_design = (req, res) =>{
    var id = req.params.id;
    Design.remove(id, (response)=>{
        res.status(200).json({result : response});
    });
}

exports.update_design = (req, res) =>{
    var data = req.body;
    Design.update(data, (response)=>{
        res.status(200).json({result : response});
    });
}