const Course = require('../models/courses');
const {mutipleMongooseTobbject} = require('../../util/mongoose');

class MeController {

    storedCourses(req, res) {
        Course.find()
        .then(courses => res.render('me/stored-courses', {
            courses: mutipleMongooseTobbject(courses)
        }))
        .catch()
    }
}

module.exports = new MeController();
