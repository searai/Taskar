const User = require("./models/user.js")
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'development'
}   
);

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET

const strategy = new JwtStrategy(opts, (jwt_payload, done)=> {
    User.findOne({email: jwt_payload.email})
    .then((user)=>{
        if(user){
            return done(null, user)
        }
        return done(null, false)
    
    }).catch(e=> done(e, false))
})


const registerStrategy = (passport)=>{
    passport.use(strategy)
}

module.exports = registerStrategy