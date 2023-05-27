var express = require('express');
var BcardController = require('../controllers/bcard.controller');

let router = express.Router();

const initRouter = ()=>{
    router.get('/', BcardController.get_list);
    router.get('/detail', BcardController.get_list);
    router.get('/detail/:id', BcardController.detail);

    router.post('/add', BcardController.add_bcard);

    router.delete('/delete/:id', BcardController.remove_bcard);

    router.put('/update', BcardController.update_bcard);

    return router;
}

module.exports = {
    initRouter
}
