const path = require("path")
const express = require("express")
const cors = require("cors")
const toDoRoutes = require("./controller/toDoRoutes.js")
const userRoutes = require("./controller/userRoutes.js")
const commentRoutes = require("./controller/commentRoutes.js")
const passport = require("passport")
require("./passportStrategy.js")(passport)
require("./models/connection.js")
require('dotenv').config()


const server = express()

const port = process.env.PORT || 5000

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors())
server.use(passport.initialize())


if(process.env.NODE_ENV === "development"){
  server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
}

server.listen(port, () => console.log(`Example app listening on port ${port}!`))


server.use("/toDo",toDoRoutes)
server.use("/user", userRoutes)
server.use("/comment", commentRoutes)


server.get("*",(req, res)=>{
    server.use(express.static(path.join(__dirname, "frontEnd", "dist")))
    res.sendFile(path.join(__dirname,"frontEnd", "dist", "index.html"))
})

