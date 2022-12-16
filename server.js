require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const DATABASE_URL = " mongodb+srv://pgroom:pgroom@cluster0.l4lhcji.mongodb.net/?retryWrites=true&w=majority"
const morgan = require("morgan")

app.use(morgan("tiny"));


mongoose.connect("mongodb+srv://pgroom:pgroom@cluster0.l4lhcji.mongodb.net/testing", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(9000, () => console.log('Server Started on port : localhost:9000'))
