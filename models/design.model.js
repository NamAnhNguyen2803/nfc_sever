const db = require('../ultiz/DbConnect');

class Design{
    constructor(id, userID, designName, backgroundColor, fontType, fontColor, logoImg, createdAt, updatedAt){
        this.id = id;
        this.userID = userID;
        this.designName = designName;
        this.backgroundColor = backgroundColor;
        this.fontType = fontType;
        this.fontColor = fontColor;
        this.logoImg = logoImg;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getAllInfor(){
        var data = {
            "id" : this.id, 
            "userID" : this.userID, 
            "designName" : this.designName,
            "backgroundColor" : this.backgroundColor,
            "fontType" : this.fontType,
            "fontColor" : this.fontColor,
            "logoImg" : this.logoImg,
            "createdAt" : this.createdAt,
            "updatedAt" : this.updatedAt,
        }

        return data;
    }


    static getAllLinkInfor(result){
        db.query("SELECT * FROM `design`", (err,data) =>{
            if (err|| data.length == 0) {
                result(null);
            } else {
                result(data);
            }
        });
    }

    static getById(id, result){
        db.query("SELECT * FROM `design` WHERE ID=?",id,(err,data)=>{
            if (err|| data.length == 0){
                result(null);
            } else {
                result(data);
            }
        });
    }

    static create(data, result){
        db.query("INSERT INTO `design` SET ?", data, (err, design) =>{
            if(err){
                result(null);
            } else {
                result({id: design.insertId, ...data})
            }
        });
    }

    static remove(id, result){
        db.query("DELETE FROM `design` WHERE ID = ?", id,
            (err,data)=>{
                if (err|| data.length == 0){
                    result(null);
                } else {
                    result("delete id = " + id + " success");
                }
            }
        );
    }

    static update(design, result){
        db.query("UPDATE INTO `design` SET user_ID=?, design_name=?, background_color=?, font_type=?, font_color=?, logo_image=?, created_at=?, updated_at=? WHERE ID=?", 
            [design.userID, design.designName, design.backgroundColor, design.fontType, design.fontColor, design.logoImg, design.createdAt, design.updatedAt, design.id],
            (err,data)=>{
                if (err){
                    result(null);
                } else {
                    result(data);
                }
            }
        );
    }

}

module.exports = Design;