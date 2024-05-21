const mongoose = require('mongoose')

var User = new mongoose.Schema({
    name: String,
    username: String,
    passowrd: String
})


module.exports = mongoose.model('UserData', User);