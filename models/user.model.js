const db = require('../ultiz/DbConnect');
const HelpMethod = require('../ultiz/HelpMethod')

class User {
    constructor(id, fullName, personalId, dob, nation, email, address, phone, createdAt, updatedAt){
        this.id  = id;
        this.fullName = fullName;
        this.personalId = personalId;
        this.dob = dob;
        this.nation = nation;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getAllInfor(){
        var data = {
            "id" : this.id, 
            "fullName" : this.fullName,
            "personalId" : this.personalId,
            "dob" : this.dob,
            "nation": this.nation,
            "email" : this.email,
            "address" : this.address,
            "phone" : this.phone,
            "createdAt" : this.createdAt,
            "updatedAt" : this.updatedAt,
        }

        return data;
    }

    static getAllUsersInfor(result){
        db.query("SELECT * FROM `users`", (err, user) => {
            if(err) {
                result(null);
                return;
            }
            result(user);
        });

    }

    static getById(id, result) {
        return db.query("SELECT * FROM `users` WHERE ID = ?", id ,
            (err, user) => {
                if(err || user.length == 0) {
                    result(null);
                } else {
                    result(user);
                }
            }
        );
    }

    static create(data, result){

        if(!data.fullName || !data.personalId || !data.dob 
            || !data.nation || !data.email || !data.address
            || !data.phone)
        {
            result("missing required params");
            return;
        }
        var createdAt, updatedAt;
        createdAt = updatedAt = HelpMethod.getMomentDATETIME();

        var dataConvert = {
            "full_name" : data.fullName,
            "personal_id" : data.personalId,
            "date_of_birth" : data.dob,
            "nation" : data.nation,
            "email" : data.email,
            "address" : data.address,
            "phone" : data.phone,
            "created_at" : createdAt,
            "updated_at" : updatedAt
        }

        db.query("INSERT INTO `users` SET ?", dataConvert,
            (err, user) => {
                if(err) {
                    result(null);
                } else {
                    result({id : user.insertId, ...dataConvert});
                }
            }
        );
    }

    static remove(id, result){
        db.query("DELETE FROM `users` WHERE ID = ?", id,
            (err, user) => {
                if(err) {
                    result(null);
                } else {
                    result("delete id = " + id + " success");
                }
            }
        );
    }

    static update(user, result){
        db.query("UPDATE INTO `users` SET full_name=?, personal_id=?, date_of_birth=?, nation=?, email=?, address=?, phone=?, created_at=?, updated_at=? WHERE ID=?",
         [user.fullName, user.personalId, user.dob, user.nation, user.email, user.address, user.phone, user.createdAt, user.updatedAt, user.id],
            (err, user) => {
                if(err) {
                    result(null);
                } else {
                    result(user);
                }
            }
        );
    }
}

module.exports = User;