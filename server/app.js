const express = require('express')
const app = express()
const article = require('./routes/article.js')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost:27017/mini-wp', { useNewUrlParser: true })

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/article', article)


app.listen(3000, function() {
    console.log('Listen Port 3000')
})
