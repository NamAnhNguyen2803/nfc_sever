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

    static async getAllUsersInfor(result){
        const [user, fields] = await db.execute("SELECT * FROM `users`");
        result(user);
    }

    static async getById(id, result) {
        const [user, fields] = await db.execute("SELECT * FROM `users` WHERE ID = ?", [id]);
        result(user);
    }

    static async create(data, result){

        if(!data.fullName || !data.personalId || !data.dob 
            || !data.nation || !data.email || !data.address
            || !data.phone)
        {
            result("missing required params");
            return;
        }
        var createdAt, updatedAt;
        createdAt = updatedAt = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "INSERT INTO `users` SET `full_name`=?, `personal_id`=?,"
            +"`date_of_birth`=?, `nation`=?, `email`=?, `address`=?,"
            +"`phone`=?, `created_at`=?, `updated_at`=?",
         [data.fullName, data.personalId, data.dob, data.nation,
            data.email, data.address, data.phone, createdAt, updatedAt]);
            
        result(rows);
    }

    static async remove(id, result){
        const [rows, fields] = await db.execute(
            "DELETE FROM `users` WHERE ID = ?", [id]);
        
        result(rows);
    }

    static async update(user, result){
        var updatedAt = HelpMethod.getMomentDATETIME();

        const [rows, fields] = await db.execute(
            "UPDATE INTO `users` SET full_name=?,"
         +"personal_id=?, date_of_birth=?, nation=?, email=?,"
         +"address=?, phone=?, updated_at=? WHERE ID=?",
         [user.fullName, user.personalId, user.dob, user.nation,
            user.email, user.address, user.phone,
            updatedAt, user.id]);

        result(rows);
    }
}

module.exports = User;