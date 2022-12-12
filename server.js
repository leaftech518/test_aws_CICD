require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const DATABASE_URL = "mongodb://127.0.0.1:27017/Sample_api_testing"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(9000, () => console.log('Server Started'))