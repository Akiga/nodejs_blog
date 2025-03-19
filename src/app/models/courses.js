// Using Node.js `require()`
const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);


const Course = new Schema({
    name: {type: String, required: true},
    des: {type: String, required: true},
    img: {type: String,},
    slug: { type: String, slug: 'name', unique: true}
  },{
    timestamps: true
  });

module.exports = mongoose.model('Course', Course);