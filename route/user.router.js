const express = require('express');
var UserController = require('../controllers/user.controller');

let router = express.Router();

const initRouter = ()=>{
    router.get('/', (req,res) =>{
        UserController.get_list(req,res);
        }
    );
    router.get('/detail', (req, res) =>{
        UserController.get_list(req, res);
    });
    router.get('/detail/:id', (req, res) => {
        UserController.detail(req,res);
    });
    router.post('/add', UserController.add_user);
    router.delete('/delete/:id', UserController.remove_user);
    router.put('/update', UserController.update_User);
    

    return router;
}

module.exports = {
    initRouter
}