const db = require('../ultiz/DbConnect');

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

    static getAllLinkInfor(result){
        db.query("SELECT * FROM `links`", (err,data) =>{
            if (err|| data.length == 0) {
                result(null);
            } else {
                result(data);
            }
        });
    }

    static getById(id, result){
        db.query("SELECT * FROM `links` WHERE ID=?",id,(err,data)=>{
            if (err|| data.length == 0){
                result(null);
            } else {
                result(data);
            }
        });
    }

    static create(data, result){
        db.query("INSERT INTO `links` SET ?", data, (err, link) =>{
            if(err){
                result(null);
            } else {
                result({id: link.insertId, ...data})
            }
        });
    }

    static remove(id, result){
        db.query("DELETE FROM `links` WHERE ID = ?", id,
            (err,data)=>{
                if (err|| data.length == 0){
                    result(null);
                } else {
                    result("delete id = " + id + " success");
                }
            }
        );
    }

    static update(link, result){
        db.query("UPDATE INTO `users` SET user_ID=?, link=?, link_type=?, created_at=?, updated_at=? WHERE ID=?", 
            [link.userID, link.link, link.link_type, link.createdAt, link.updatedAt, link.id],
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

module.exports = Link;