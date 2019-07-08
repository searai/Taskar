const express = require("express")
const router = express.Router()
const User = require("../models/user.js")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/signUp", (req, res)=>{
 
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
             return res.status(400).send({emailError: "User with that email already exists"})
        }
        return User.findOne({userName: req.body.userName}).then(user=>{
            if(user) return res.status(400).send({userError: "That user already exists"})

            if(!validator.isEmail(String(req.body.email))){
                return res.status(400).send({emailError: "That email is not of a vaild format"})
            }
            if(req.body.userName.length < 6){
                return res.status(400).send({userError: "Username needs to be at least 6 characters"})
            }
            if(req.body.password.length < 6){
                return res.status(400).send({passwordError: "Password needs to be at least 6 characters"})
            }
    
            return bcrypt.hash(req.body.password, 10).then(hashPassword => {
                let userObject = {...req.body,
                                    password : hashPassword
                    }
                const user = new User(userObject)
                return user.save().then(()=>res.send({success:true}))
                })

        })
    
      
    }).catch(e=>res.status(500).send(e))
    
})

router.post("/login", (req, res)=>{

    if(!validator.isEmail(req.body.email)){
        return res.status(400).send({emailError: "That email is not of a vaild format"})
    }

    User.findOne({email : req.body.email})
    .then(user=>{
        if(!user){
            return res.status(400).send({emailError:"That email is not registered"})
        }
        return bcrypt.compare(req.body.password, user.password)
        .then(result=>{
            if(result){
                const token = jwt.sign({email: req.body.email}, "secret")
                return res.send({userName:user.userName,
                                 token:token
                                })  
               }    
               return res.status(400).send({passwordError: "Password invalid"}) 

        })
    })
    .catch(e=>res.status(500).send(e))
    
})

router.post("/testapi",(req, res)=>{
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
            res.send("success")
        }else{
            res.send("not found")
        }
    })
    .catch(()=>res.send("something went wrong"))
  
  })

module.exports = router