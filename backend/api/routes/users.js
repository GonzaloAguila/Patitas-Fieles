const express = require("express");
const User = require("../../models/users");
const router = express.Router();
const passport = require("passport");
const { update } = require("../../models/users");

//postear un nuevo usuario
router.post("/register", async (req, res) => {
  let newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

//traer todos los usuarios
router.get("/getUsers", async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
});

router.post("/auth/login", passport.authenticate("local"), async (req, res) => {
  let gettedUser = await User.findOne({ name: req.body.name });
  if (!gettedUser) res.sendStatus(404);
  try {
    //fijarse si matchea el password
    gettedUser.comparePassword(req.body.password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        res.send(gettedUser);
      } else {
        res.sendStatus(401);
      }
    });
  } catch (error) {
    res.send(error);
  }
});

//verificar si hay un usuario logeado
router.get("/auth/me", (req, res) => {
  if (req.user) return res.send(req.user); //req.user lo da passport.
  res.sendStatus(401);
});

//deslogearse
router.post("/auth/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

//compras
router.put("/updatewallet", async (req, res) => {
    if(req.body.wallet == 'gold'){
       const updatedUser = await User.findOneAndUpdate({name: req.body.name}, {$inc: {wallet: -500}}, {new:true})
       res.send(updatedUser)
    }
    if(req.body.wallet == 'silver'){
        const updatedUser = await User.findOneAndUpdate({name: req.body.name}, {$inc: {wallet: -200}}, {new:true})
        res.send(updatedUser)
     }
});

module.exports = router;
