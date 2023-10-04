const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: mongoose.ObjectId,
    LaptopName: String,
    LaptopImage: String
});

module.exports = mongoose.model('Laptop',schema);