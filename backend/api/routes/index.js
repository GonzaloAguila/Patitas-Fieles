const express = require("express");
const router = express.Router();

//Archivos de rutas individuales
const dogRoutes = require("../routes/dogs")
const userRoutes = require("../routes/dogs")

router.use("/dogs", dogRoutes)
router.use("/users", userRoutes)


module.exports = router;