const User = require("./models/user.js")
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv').config()

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET

const strategy = new JwtStrategy(opts, (jwt_payload, done)=> {
    User.findOne({email: jwt_payload.email}, (err, user)=> {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
})




const registerStrategy = (passport)=>{
    passport.use(strategy)
}

module.exports = registerStrategy