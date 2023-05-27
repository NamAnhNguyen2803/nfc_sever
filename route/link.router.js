const express = require('express');
var LinkController = require('../controllers/link.controller');

let router = express.Router();

const initRouter = ()=>{
    router.get('/', LinkController.get_list);
    router.get('/detail', LinkController.get_list);
    router.get('/detail/:id', LinkController.detail);

    router.post('/add', LinkController.add_link);

    router.delete('/delete/:id', LinkController.remove_link);

    router.put('/update', LinkController.update_link);

    
    return router;
}

module.exports = {
    initRouter
}