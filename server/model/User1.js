const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})

const UserModel = mongoose.model("User", UserSchema, 'userrs');

module.exports = UserModel;