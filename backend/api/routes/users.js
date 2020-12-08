const express = require("express")
const User = require("../../models/users")
const router = express.Router()

//postear un nuevo usuario
router.post("/newUser", async (req,res) => {
    let newUser = new User(req.body)
    await newUser.save()
    res.send(newUser)
})

//traer todos los usuarios
router.get("/getUsers", async (req,res) => {
    let allUsers = await User.find({})
    res.send(allUsers)
})

//traer un user por nombre
router.get("/:name", async (req,res) => {
    let singleUser = await User.findOne({name : req.params.name})
    singleUser ? res.send(singleUser) 
               : res.send('No existe ningún usuario con ese nombre')
})

module.exports = router