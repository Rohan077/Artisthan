require('dotenv').config()

const express = require('express');

const cors = require('cors');

const router = require('./routes/routes');

const mongoose = require('mongoose');

const app=express();

app.use(cors());

app.use(express.json({limit: '50mb'}))


// app.use(express.urlencoded({extended:false}))

app.use(router)


mongoose.connect(process.env.DATABASE_URL).then(result=>{
    console.log("Connected to MongoDB - Artisthan")
    app.listen(process.env.PORT,()=>{
        console.log(
            'Sever started!'
        )
    })
})