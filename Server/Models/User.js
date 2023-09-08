const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    email: String,
    phone: {
        type: Number,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel