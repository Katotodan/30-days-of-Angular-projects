const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require("./passport.js")
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/auth').then(() =>{
    console.log("DB connected")
}).catch(err =>{
    console.log("Something went wrong with the DB");
})

const routerPath = require("./router")
const app = express()

const store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/auth',
    collection: 'mySessions'
})

app.use(cors({
    origin:"http://localhost:4200",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'Access-Control-Allow-Credentials', 
        'Access-Control-Allow-Origin',
    ],
    credentials: true
}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { 
        maxAge: 1000 * 60 * 5
     }
}))
app.use(passport.authenticate('session'))
// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routerPath)


app.listen(5000, ()=> console.log("Server running on port 5000"))