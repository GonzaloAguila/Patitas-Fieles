const express = require("express")
const {Donation} = require("../../models/users")
const router = express.Router()


//traer todas las donaciones
router.get("/getDonations", async (req,res) => {
    let allDonations = await Donation.find({})
    res.send(allDonations)
})


module.exports = router