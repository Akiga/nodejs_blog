module.exports = {
    mutipleMongooseTobbject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseTobbject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}