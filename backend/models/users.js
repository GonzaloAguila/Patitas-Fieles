const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const SALT_WORK_FACTOR = 10;


const donation = new mongoose.Schema({
    type:{
        type:String
    },
    amount: {
        type:Number
    },
    name: {
        type:String
    }
})


const user = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    wallet: {
        type:Number
    },
    donations: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: 'donation'
    }]
        
})

user.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
     
user.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
const User = mongoose.model("user", user)
const Donation = mongoose.model("donation", donation)

module.exports = {User,Donation}