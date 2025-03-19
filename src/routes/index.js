const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courRouter = require('./courses');




function route(app){
      
    app.use('/courses', courRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    

}

module.exports = route;