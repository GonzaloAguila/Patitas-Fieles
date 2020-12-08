const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: {
        type:String
    },
    lastname: {
        type:String,
    },
    age: {
        type:Number
    },
    password: {
        type:String,
    },
    email: {
        type:String,
    }
})

module.exports = User = mongoose.model("user", user)