const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        requires: true, //obrigatório
    },
    
    email:{
        type: String,
        requires: true,
    }

})