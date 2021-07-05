const express = require("express")
const Device = require("../models/device")
const router = express.Router()

// get a device object by id
router.get("/:deviceId", (req, res) => {
    Device.find({deviceId: Number(req.params.deviceId)})
    .exec()
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err => {
        console.lof(err)
    })
})

// create a device object
router.post("/", (req, res) => {

    const device = new Device({
        deviceId: req.body.deviceId,
        deviceType: req.body.deviceType,
        deviceLocation: req.body.deviceLocation,
        site: req.body.site,
        isIndoor: req.body.isIndoor
    })

    if(req.body.floor) {
        device.floor = req.body.floor
    }

    if(req.body.maxOccupancy) {
        device.maxOccupancy = req.body.maxOccupancy
    }

    device.save()
    .then(result => {
        console.log(result)
        res.send({ msg: "Update succeed!" })
    })
    .catch(err => {
        console.log(err)
        res.send({ msg: "Update failed!" })
    })

})

module.exports = router