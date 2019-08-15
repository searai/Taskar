const express = require("express")
const router = express.Router()
const User = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'development'
}   
);

router.post("/signUp", (req, res)=>{

    let errors = {}

    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
             errors.emailError = "User with that email already exists"
        }
        return User.findOne({userName:req.body.userName}).then((user)=>{
            if(user){
                 errors.userNameError = "Username already exists"
            }

            if(errors.emailError || errors.userNameError){
                return res.status(400).send(errors)
            }
            return bcrypt.hash(req.body.password, 10).then(hashPassword => {
                let userObject = {...req.body,
                                password : hashPassword
                            }
                const user = new User(userObject)
                return user.save().then(()=>res.send({success:true}))
            })
        })

    }).catch(()=>res.status(500))

           
})

router.post("/login", (req, res)=>{

    function comparePassword(user){
        bcrypt.compare(req.body.password, user.password)
        .then(result=>{
            if(result){
                const token = jwt.sign({email: req.body.email}, process.env.SECRET)
                return res.send({userName:user.userName,
                                 token:token
                                })  
               }    
            res.status(400).send({passwordError: "Password invalid"})

        }).catch(()=>res.status(500))
    }

    User.findOne({email : req.body.email})
    .then(user=>{
        if(!user){
            return res.status(400).send({emailError:"That email is not registered"})
        }

        if(user.startTime){
            if(Date.now() - user.startTime >10*1000){
                user.loginAttempts = 0
            }
        }
     
        if(user.loginAttempts === 0){
            user.startTime = Date.now()
            user.loginAttempts += 1
            user.save()
            comparePassword(user)

        }else if(user.loginAttempts < 5){
            user.loginAttempts += 1
            user.save()
            comparePassword(user)
            
        }else{
             res.status(400).send({excessAttempts:"Too many login attempts please wait"})
        }

    })
    .catch(()=>res.status(500))
    
})


module.exports = router