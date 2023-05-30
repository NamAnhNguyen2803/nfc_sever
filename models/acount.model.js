const db = require('../ultiz/DbConnect');
const HelpMethod = require('../ultiz/HelpMethod');

class Acount {
    constructor(id, userID, password, designID, createdAt, updatedAt){
        this.id = id;
        this.userID =userID;
        this.password = password;
        this.designID = designID;
        this.createdAt =createdAt;
        this.updatedAt = updatedAt;
    }

    getAllInfor(){
        var data = {
            "id" : this.id, 
            "userID" : this.userID, 
            "password" : this.password,
            "designID" : this.designID,
            "createdAt" : this.createdAt,
            "updatedAt" : this.updatedAt,
        }

        return data;
    }

    static async getAllAcountsInfor(result){
        const [rows, fields] = await db.execute(
            "SELECT * FROM `acounts`");

        result(rows);
    }

    static async getById(id, result) {
        const [rows, fields] = await db.execute(
            "SELECT * FROM acounts WHERE ID LIKE ?",
             [id]);

        result(rows);
    }

    static async create(data, result){
        var createdAt, updatedAt;
        createdAt = updatedAt = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "INSERT INTO `acounts` SET ID=?,"
            +" user_ID=?, password=?, design_ID=?,"
            +" created_at=?, updated_at=?", 
            [data.id, data.userID, data.password,
            data.designID, createdAt, updatedAt]);

        result(rows);
    }

    static async remove(id, result){
        await db.execute("DELETE FROM `acounts` WHERE id = ?", [id]);
        result("delete id = " + id + " success");
    }

    static async update(acount, result){
        var updatedAt = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "UPDATE INTO `acounts` SET user_ID=?,"
            +" password=?, design_ID=?,"
            +" updated_at=? WHERE ID LIKE ?",
         [acount.userID, acount.password, 
            acount.designID, updatedAt, 
            acount.id]);
        
        result(rows);
    }
}

module.exports = Acount;