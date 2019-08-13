const express = require("express")
const router = express.Router()
const Comment = require("../models/comments.js")
const passport = require("passport")

router.get("/getAllMainComments", (req, res)=>{
    Comment.find({linkedTo: null}).then(docs=>res.send(docs))
    .catch(()=>res.status(500))

})

router.get("/getAllReplies/:linkedTo", (req, res)=>{
    Comment.find({linkedTo: req.params.linkedTo}).then(docs=>res.send(docs))
    .catch(()=>res.status(500))

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
    .catch(()=>res.status(500))

})


router.delete("/remove/:id",(req, res)=>{
    function remove(id){
        Comment.findOneAndDelete({_id:id})
        .then((doc)=>{
                return Comment.find({linkedTo:doc._id})
                .then((docs)=>{
                        for(let i= 0; i< docs.length; docs ++){
                            remove(docs[i]._id)
                        }
                })
      
        }).catch(e => res.status(500).send(e))
    }

    remove(req.params.id)

  })



// router.delete("/remove/:id",(req, res)=>{
//     Comment.findOneAndDelete({_id: req.params.id})
//     .then((doc)=>{
//         if(doc){
//             res.send(`${doc} was deleted`)
//         }else{
//             res.send("That document was not found")
//         }
//     })
//     .catch(e => res.status(500).send(e))
//   })

module.exports = router