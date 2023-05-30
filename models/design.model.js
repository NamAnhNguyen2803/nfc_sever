const db = require('../ultiz/DbConnect');
const HelpMethod = require('../ultiz/HelpMethod');

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


    static async getAllLinkInfor(result){
        const[rows, fields] = await db.execute(
            "SELECT * FROM `design`");

        result(rows);
    }

    static async getById(id, result){
        const[rows, fields] = await db.execute(
            "SELECT * FROM `design` WHERE ID=?",[id]);

        result(rows);
    }

    static async create(data, result){
        
        var createdAt, updatedAt;
        createdAt = updatedAt = HelpMethod.getMomentDATETIME();

        const[rows, fields] = await db.execute(
            "INSERT INTO `design` SET user_ID=?,"
            +"design_name=?, background_color=?,"
            +"font_type=?, font_color=?, logo_image=?,"
            +"created_at=?, updated_at=?", 
            [data.userID, data.designName, data.backgroundColor,
            data.fontType, data.fontColor, data.logoImg,
            createdAt, updatedAt],);

        result(rows);
    }

    static async remove(id, result){
        const[rows, fields] = await db.execute(
            "DELETE FROM `design` WHERE ID = ?", [id]);

        result(rows);
    }

    static async update(design, result){
        var updatedAt = HelpMethod.getMomentDATETIME();

        const[rows, fields] = await db.execute(
            "UPDATE INTO `design` SET user_ID=?,"
            +" design_name=?, background_color=?,"
            +" font_type=?, font_color=?, logo_image=?,"
            +" updated_at=? WHERE ID=?", 
            [design.userID, design.designName, 
                design.backgroundColor, design.fontType, 
                design.fontColor, design.logoImg, 
                updatedAt, design.id]);
        
        result(rows);
    }

}

module.exports = Design;