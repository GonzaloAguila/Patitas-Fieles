const express = require("express")
const Dog = require("../../models/dogs")
const router = express.Router()

//postear un nuevo perro
router.post("/newDog", async (req,res) => {
    let newDog = new Dog(req.body)
    await newDog.save()
    res.send(newDog)
})

//traer todos los perros
router.get("/getDogs", async (req,res) => {
    let allDogs = await Dog.find({})
    res.send(allDogs)
})

//traer un perro por nombre
router.get("/:name", async (req,res) => {
    console.log(req.params)
    let singleDog = await Dog.findOne({name : req.params.name})
    singleDog ? res.send(singleDog) 
              : res.send('No existe ningún perro con ese nombre')
})

module.exports = router