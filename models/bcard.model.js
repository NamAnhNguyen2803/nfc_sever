const db = require('../ultiz/DbConnect');
const HelpMethod = require('../ultiz/HelpMethod');

class Bcard {
    constructor(id, userID, designID, nickname, address, phone, email, img, cover, organization, jobTitle, type, createdAt, updatedAt){
        this.id = id;
        this.userID =userID;
        this.designID = designID;
        this.nickname = nickname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.img = img;
        this.cover = cover;
        this.type = type;
        this.createdAt =createdAt;
        this.updatedAt = updatedAt;
    }

    getAllInfor(){
        var data = {
            "id" : this.id, 
            "userID" : this.userID, 
            "nickname" : this.nickname, 
            "address" : this.address, 
            "phone" : this.phone, 
            "email" : this.email, 
            "img" : this.img, 
            "cover" : this.cover, 
            "organization" : this.organization,
            "jobTitle" : this.jobTitle,
            "type" : this.type, 
            "createdAt" : this.createdAt,
            "updatedAt" : this.updatedAt,
        }

        return data;
    }

    static async getAllBcardsInfor(result){
        const [rows, fields] = await db.execute("SELECT * FROM `bcards`");
        result(rows);
    }

    static async getById(id, result) {
        const [rows, fields] = await db.execute("SELECT * FROM `bcards` WHERE ID = ?", [id]);
        result(rows);
    }

    static async create(data, result){
        var created_at, updated_at;
        created_at = updated_at = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "INSERT INTO `bcards` SET user_ID=?,"
            +"design_ID=?, nickname =?, address=?"
            +"phone=?, email=?, image=?, cover=?"
            +"organization=?, job_title=?, type=?"
            +"created_at = ?, updated_at=?", 
             [data.userID,data.designID, data.nickname,
            data.address, data.phone, data.email,
            data.image, data.cover, data.organization,
            ]);
        result(rows);
    }

    static async remove(id, result){
        const [rows, fields] = await db.execute(
            "DELETE FROM `bcards` WHERE id = ?", [id]);
        result(rows);
        
    }

    static async update(bcard, result){

        var updatedAt = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "UPDATE INTO `bcards` SET user_ID=?,"
            +"design_ID=?, nickname=?, address=?,"
            +"phone=?, email=?, image=?, cover=?,"
            +"organization=?, job_title=?, type=?,"
            + "updated_at=? WHERE ID=?",
         [bcard.userID,  bcard.designID, 
            bcard.nickname, bcard.address,
            bcard.phone, bcard.email, 
            bcard.image, bcard.cover, 
            bcard.organization, 
            bcard.jobTitle, 
            bcard.type, updatedAt, 
            bcard.id]);
        result(rows);
    }
}

module.exports = Bcard;