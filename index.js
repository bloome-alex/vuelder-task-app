const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT, ()=>{
    console.log('server listening at port: ', process.env.PORT)
})