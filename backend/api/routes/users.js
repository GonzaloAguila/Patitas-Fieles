const router = require("express").Router();
const passport = require("passport");
const User = require("../../models/users")

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(() => res.sendStatus(401));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) res.send(req.user);
  else res.send({});
});

module.exports = router;