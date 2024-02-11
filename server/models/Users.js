const mongoose = require('mongoose');


const usersSchema=mongoose.Schema({
    artistname:String,
    firstname:String,
    lastname:String,
    category:String,
    location:String,
    phone:String,
    email:String,
    password:String,
    image:String,
    work:String,
    darkMode:Boolean
})

module.exports=mongoose.model('Users',usersSchema)