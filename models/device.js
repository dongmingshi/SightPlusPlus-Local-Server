const mongoose = require("mongoose")

const schema = mongoose.Schema({
    deviceId: Number,
    deviceType: String, 
    deviceLocation: String, 
    site: String,
    isIndoor: Boolean, 
    floor: Number,
    maxOccupancy: Number,
})

module.exports = mongoose.model("Device", schema)