const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {ROLE} = require('./role')

//create the user schemma

const userSchema = new Schema({
    username : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    password : {
        type : String,
        require: true
    },
    creation_date : {
        type : Date,
        require: true
    }
});

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',userSchema);