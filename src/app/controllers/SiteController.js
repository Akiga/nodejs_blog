
const Course = require('../models/courses');
const {mutipleMongooseTobbject} = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then(courses =>{
                res.render('home',{
                    courses : mutipleMongooseTobbject(courses)
                })
            })
            .catch(error => next(error))
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
