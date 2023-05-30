const express = require('express');
const router = express.Router();

var userRouter = require('./user.router');
var acountRouter = require('./acount.router');
var bcardRouter = require('./bcard.router');
var designRouter = require('./design.router');
var linkRouter = require('./link.router');
var ApiController = require('../controllers/api.controller');

// api crud db
let initRouter = ()=> {
    router.use('/user',userRouter.initRouter());
    router.use('/acount',acountRouter.initRouter());
    router.use('/bcard', bcardRouter.initRouter());
    router.use('/design', designRouter.initRouter());
    router.use('/link', linkRouter.initRouter());
    router.get('/:id', ApiController.getAllInforOfUserId);
    return router;
}


module.exports = {
    initRouter
}