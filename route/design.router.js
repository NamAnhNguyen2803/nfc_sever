const express = require('express');
var DesignController = require('../controllers/design.controller');

let router = express.Router();

const initRouter = ()=>{
    router.get('/', DesignController.get_list);
    router.get('/detail', DesignController.get_list);
    router.get('/detail/:id', DesignController.detail);

    router.post('/add', DesignController.add_design);

    router.delete('/delete/:id', DesignController.remove_design);

    router.put('/update', DesignController.update_design);

    return router;
}

module.exports = {
    initRouter
}