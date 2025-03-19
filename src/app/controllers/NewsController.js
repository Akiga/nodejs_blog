const Course = require('../models/courses');
const {mutipleMongooseTobbject} = require('../../util/mongoose')



// Get
class NewsController {
    index(req, res, next) {
            Course.find({})
                .then(courses =>{
                    res.render('news',{
                        courses : mutipleMongooseTobbject(courses)
                    })
                })
                .catch(error => next(error))
        }
}

module.exports = new NewsController;