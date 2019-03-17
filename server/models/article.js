const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: String,
    content: String,
    createdAt: String,
    author: String,
    url: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

const Article = mongoose.model('articles', articleSchema)

module.exports = Article