const apiRouter = require('./api.router');
// const homeRouter = require('./home.router');

let route = (app)=>{
    // app.use('/', homeRouter.initRouter());
    app.use('/api', apiRouter.initRouter());
    
}

module.exports = route;

