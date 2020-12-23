const express = require("express");
const router = express.Router();

//Archivos de rutas individuales
const dogRoutes = require("../routes/dogs")
const userRoutes = require("../routes/users")
const donationRoutes = require("../routes/donations")

router.use("/dogs", dogRoutes)
router.use("/users", userRoutes)
router.use("/donations", donationRoutes)



module.exports = router;