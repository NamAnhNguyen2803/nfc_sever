const express = require('express');
var homeController = require('../controllers/home.controller');

let router = express.Router(); 

let initRouter = ()=>{
    router.get('/', (req, res)=>{
        homeController.home(req,res);
    });

    router.get('/about', homeController.about);

    return router;
}

module.exports = {
    initRouter
}