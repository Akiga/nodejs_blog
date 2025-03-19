const Course = require('../models/courses');
const { mongooseTobbject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            if (!course) {
                return res.status(404).send("Course not found");
            }
            res.render("courses/show", { course: mongooseTobbject(course) });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/create
    create(req, res) {
        res.render("courses/create");
    }

    // [POST] /courses/store
    async store(req, res, next) {
        try {

            const course = new Course(req.body);
            await course.save();
            res.redirect('/me/stored/courses'); // Điều hướng về danh sách khóa học
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    // GET /courses/:id/edit
    edit(req, res) {
        Course.findById(req.params.id)
            .then(course => res.render("courses/edit", {
                 course: mongooseTobbject(course)}))
            .catch(error => next(error));
    }


    // PUT /courses/:id
    async update(req, res, next) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(error);
        }
    }


    // DELETE /courses/:id
    detroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(error => next(error));
    }
}

module.exports = new CourseController;
