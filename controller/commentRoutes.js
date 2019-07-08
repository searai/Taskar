const express = require("express")
const router = express.Router()
const Comment = require("../models/comments.js")
const passport = require("passport")

router.get("/getAllMainComments", (req, res)=>{
    Comment.find({linkedTo: undefined}).then(docs=>res.send(docs))
    .catch(e=>res.status(500).send(e))

})

router.get("/getAllReplies/:linkedTo", (req, res)=>{
    Comment.find({linkedTo: req.params.linkedTo}).then(docs=>res.send(docs))
    .catch(e=>res.status(500).send(e))

})


router.post("/add", passport.authenticate('jwt', { session: false }), (req, res)=>{
    const comment = new Comment(req.body)
    comment.save().then((doc)=>{
       res.send(`The following was added ${doc}`)
   }).catch(e=>res.status(500).send(e))
 
})

router.put("/update/:id", (req, res)=>{
    Comment.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((doc)=>{
        if(doc){
            res.send(`${doc} was updated`)
        }else{
            res.send("That document was not found")
        }
    })
    .catch(e=>res.status(500).send(e))

})

router.delete("/remove/:id",(req, res)=>{
    Comment.findOneAndDelete({_id: req.params.id})
    .then((doc)=>{
        if(doc){
            res.send(`${doc} was deleted`)
        }else{
            res.send("That document was not found")
        }
    })
    .catch(e => res.status(500).send(e))
  })

module.exports = router