const db = require('../ultiz/DbConnect');

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

    static getAllAcountsInfor(result){
        db.query("SELECT * FROM `acounts`", (err, acount, list) => {
            if(err) {
                result(null);
                return;
            }
            result(list);
        });

    }

    static getById(id, result) {
        db.query("SELECT * FROM acounts WHERE ID LIKE ?", id ,
            (err, acount) => {
                if(err || acount.length == 0) {
                    result(null);
                } else {
                    result(acount);
                }
            }
        );
    }

    static create(data, result){
        db.query("INSERT INTO `acounts` SET ?", data,
            (err, acount) => {
                if(err) {
                    result(null);
                } else {
                    result({id : acount.insertId, ...data});
                }
            }
        );
    }

    static remove(id, result){
        db.query("DELETE FROM `acounts` WHERE id = ?", id,
            (err, acount) => {
                if(err) {
                    result(null);
                } else {
                    result("delete id = " + id + " success");
                }
            }
        );
    }

    static update(acount, result){
        db.query("UPDATE INTO `acounts` SET user_ID=?, password=?, design_ID=?, created_at=?, updated_at=? WHERE ID LIKE ?",
         [acount.userID, acount.password, acount.designID, acount.createdAt, acount.updatedAt, acount.id],
            (err, acount) => {
                if(err) {
                    result(null);
                } else {
                    result(acount);
                }
            }
        );
    }
}

module.exports = Acount;