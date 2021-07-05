const express = require('express')
const app = express()
const mongoose = require('mongoose')
const deviceEndpoints = require('./endpoints/device')

mongoose.connect('mongodb://localhost:27017/sight_plus_plus', { useNewUrlParser: true })

mongoose.connection.on('connected',() => {
    console.log('Connected')
})
mongoose.connection.on('error',(err) => {
    console.log('Connection error: ' + err)
})
mongoose.connection.on('disconnected',() => {
    console.log('Disconnected')
})

app.use(express.json())
app.use("/device", deviceEndpoints)
app.listen(3000, () => console.log('Server running on port 3000'))