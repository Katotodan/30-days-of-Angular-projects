// Importing imported package
const passport = require('passport')
const LocalStrategy = require('passport-local')
const crypto = require('crypto')
const {UserModel} = require("./db.js")


passport.use(new LocalStrategy( async function verify(username, password, cb) {
    // Check if user exist
    const user = await UserModel.findOne({username: username, password: password}).exec()
    if(user){
        return  cb(null, user)
    }else{
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = passport;