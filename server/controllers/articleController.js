const Article = require('../models/article')


class Controller{
    static addArticle(req, res) {
        let data = {
            title: req.body.title,
            content: req.body.content,
            createdAt: new Date().toISOString()
        }
        Article
            .create(data)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static findAll(req, res) {
        Article
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static update(req, res) {
        Article
            .update({
                _id: req.params.id
            },{
                $set: req.body
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static delete(req, res) {
        Article
            .findByIdAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static findOne(req, res) {
        Article
            .findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }
}

module.exports = Controller