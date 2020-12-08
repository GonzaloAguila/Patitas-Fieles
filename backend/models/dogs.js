const mongoose = require("mongoose")

const dog = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:Number
    },
    size: {
        type:String,
    },
    img: {
        type:String,
    },
    gender: {
        type:String,
    }
})

module.exports = Dog = mongoose.model("dog", dog)