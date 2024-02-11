const mongoose = require('mongoose');


const postsSchema=mongoose.Schema({
    artistname:String,
    caption:String,
    image:String,
    audio:String,
    video:String,
    date:String,
    time:String,
    profilePicture:String,
})

module.exports=mongoose.model('Posts',postsSchema)