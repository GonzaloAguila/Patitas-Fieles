const express = require("express");
const router = express.Router();

//Archivos de rutas individuales
const dogRoutes = require("../routes/dogs")
const userRoutes = require("../routes/users")

router.use("/dogs", dogRoutes)
router.use("/users", userRoutes)


module.exports = router;