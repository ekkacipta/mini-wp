const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: String,
    content: String,
    createdAt: String
})

const Article = mongoose.model('articles', articleSchema)

module.exports = Article