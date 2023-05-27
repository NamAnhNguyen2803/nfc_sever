const db = require('../ultiz/DbConnect');

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

    static getAllBcardsInfor(result){
        db.query("SELECT * FROM `bcards`", (err, bcard) => {
            if(err) {
                result(null);
                return;
            }
            result(bcard);
        });

    }

    static getById(id, result) {
        db.query("SELECT * FROM `bcards` WHERE ID = ?", id ,
            (err, bcard) => {
                if(err || bcard.length == 0) {
                    result(null);
                } else {
                    result(bcard);
                }
            }
        );
    }

    static create(data, result){
        db.query("INSERT INTO `bcards` SET ?", data,
            (err, bcard) => {
                if(err) {
                    result(null);
                } else {
                    result({id : bcard.insertId, ...data});
                }
            }
        );
    }

    static remove(id, result){
        db.query("DELETE FROM `bcards` WHERE id = ?", id,
            (err, bcard) => {
                if(err) {
                    result(null);
                } else {
                    result("delete id = " + id + " success");
                }
            }
        );
    }

    static update(bcard, result){
        db.query("UPDATE INTO `bcards` SET user_ID=?, design_ID=?, nickname=?, address=?, phone=?, email=?, image=?, cover=?, organization=?, job_title=?, type=? ,created_at=?, updated_at=? WHERE ID=?",
         [bcard.userID,  bcard.designID, bcard.nickname, bcard.address, bcard.phone, bcard.email, bcard.image, bcard.cover, bcard.organization, bcard.jobTitle, bcard.type, bcard.createdAt, bcard.updatedAt, bcard.id],
            (err, bcard) => {
                if(err) {
                    result(null);
                } else {
                    result(bcard);
                }
            }
        );
    }
}

module.exports = Bcard;