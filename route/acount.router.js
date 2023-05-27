const express = require('express');
var acountController = require('../controllers/acount.controller');

let router = express.Router();

const initRouter = ()=>{
    router.get('/', (req,res) =>{
        acountController.get_list(req,res);
        }
    );
    router.get('/detail', (req, res) =>{
        acountController.get_list(req, res);
    });
    router.get('/detail/:id', (req, res) => {
        acountController.detail(req,res);
    });
    router.post('/add', acountController.add_acount);
    router.delete('/delete/:id', acountController.remove_acount);
    router.put('/update', acountController.update_acount);
    

    return router;
}

module.exports = {
    initRouter
}