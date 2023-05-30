const db = require('../ultiz/DbConnect');
const HelpMethod = require('../ultiz/HelpMethod');

class Link {
    constructor(id, userID, link, link_type, createdAt, updatedAt){
        this.id = id;
        this.userID =userID
        this.link = link;
        this.link_type = link_type;
        this.createdAt =createdAt;
        this.updatedAt = updatedAt;
    }

    getAllInfor(){
        var data = {
            "id" : this.id, 
            "userID" : this.userID, 
            "link" : this.link,
            "link_type" : this.link_type,
            "createdAt" : this.createdAt,
            "updatedAt" : this.updatedAt,
        }

        return data;
    }

    static async getAllLinkInfor(result){
        const[rows, fields] = await db.execute(
            "SELECT * FROM `links`");

        result(rows);
    }

    static async getById(id, result){
        const[rows, fields] = await db.execute(
            "SELECT * FROM `links` WHERE ID=?",[id]);

        result(rows);
    }

    static async create(data, result){
        var createdAt, updatedAt
        createdAt = updatedAt = HelpMethod.getMomentDATETIME();

        const[rows, fields] = await db.execute(
            "INSERT INTO `links` SET user_ID=?,"
            +" link=?, link_type=?,"
            +" created_at=?, updated_at=?", 
            [data.userID, data.link, data.link_type,
            createdAt, updatedAt]);
        
        result(rows);
    }

    static async remove(id, result){
        const[rows, fields] = await db.execute(
            "DELETE FROM `links` WHERE ID = ?", [id]);
        result(rows);
    }

    static async update(link, result){
        var updatedAt = HelpMethod.getMomentDATETIME();

        const[rows, fields] = await db.execute(
            "UPDATE INTO `users` SET user_ID=?, link=?,"
            +" link_type=?, updated_at=?"
            +" WHERE ID=?", 
            [link.userID, link.link, link.link_type, 
                updatedAt, link.id]
        );

        result(rows);
    }
    
}

module.exports = Link;