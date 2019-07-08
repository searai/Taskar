const express = require("express")
const router = express.Router()
const ToDo = require("../models/toDo.js")

router.get("/getAll/:author", (req, res)=> {
    ToDo.find({author:req.params.author}).then(docs=>res.send(docs))
    .catch(e=>res.status(500).send(e))
 
})

router.get("/search/:author", (req, res)=> {
    ToDo.find({author: req.params.author,
                body: { "$regex": `${req.query.search}`, "$options": "i" }
            }).then(docs=>res.send(docs))
            .catch(e=>res.status(500).send(e))
 
})

router.put("/update/:id", (req,res)=>{
    ToDo.findOneAndUpdate({_id: req.params.id}, req.body)
    .then((doc)=>res.send(`${doc} was updated`))
    .catch(e=>res.status(500).send(e))
    
})

router.delete("/remove/:id", (req, res)=>{
    ToDo.findOneAndDelete({_id: req.params.id})
    .then((doc)=>res.send(`${doc} was deleted`))
    .catch(e => res.status(500).send(e))
})


router.post("/add", (req, res)=>{
    const todo1 = new ToDo(req.body)
     todo1.save().then((doc)=>{
        res.send(`The following was added ${doc}`)
    }).catch(e=>res.status(500).send(e))
})

module.exports = router

