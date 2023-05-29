const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    permission: Array,
    type: String,
    mobile: String

});

module.exports = mongoose.model('users',userSchema);