// Using Node.js `require()`
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String},
    des: {type: String},
    img: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

module.exports = mongoose.model('Course', Course);