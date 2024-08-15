const express = require('express')
const mongoose = require('mongoose')
const passport = require("./passport.js")
const { UserModel } = require('./db.js')


const router = express.Router()


router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))
router.get("/login", (req, res,next) =>{
    res.status(401).json({"success": "fail", "message": "Log in fails, check your username or password"})
})
router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
})

// Checking user middleware
const checkUser = (req, res, next)=>{
    if(req.user) {
        next()
    }else{
        res.redirect('/login')
    }
}
router.get("/", checkUser, (req, res, nex) =>{
    res.json(req.user)
})

router.post('/signup', async function(req, res, next) {
    try {
        // Check if user exist
        const userExist = await UserModel.find({"username":req.body.username}).exec()
        if(userExist.length < 1){
            const user = await UserModel.create({"username":req.body.username, "password": req.body.password})
            req.login(user, function(err) {
                if (err) {
                    console.log("Something went wrong"); 
                    res.redirect("/login")
                }
                res.redirect('/');
            })
        }else{
            console.log(userExist);
            
            throw new Error("User exist")
        }
        
    } catch (error) {
        res.status(409).json({"success": "fail", "message": "User exist already"})
    }
    
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
})

module.exports = router 