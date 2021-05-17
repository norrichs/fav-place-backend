const Place = require("../models/place.js")
const express = require("express")
const router = express.Router()

// INDEX route
router.get("/", async (req, res)=>{
	res.json(await Place.find({}))
})

// CREATE route
router.post("/", async (req, res)=>{
	res.json(await Place.create(req.body))
})

// UPDATE route
router.put("/:id", async (req,res) => {
	res.json(await Place.findByIdAndUpdate(req.params.id, req.body, {new: true }))
})

// DELETE route
router.delete("/:id", async (req, res) => {
	res.json(await Place.findByIdAndRemove(req.params.id))
})

// EXPORT ROUTER
module.exports = router