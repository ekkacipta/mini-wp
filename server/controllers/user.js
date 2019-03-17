const User = require('../models/user')
const jwtConvert = require('../helpers/jwtConvert')
const bcrypt = require('bcrypt')

class UserController {
    static findAll(req, res) {
        User
            .find()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static register(req, res) {
        let new_user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User
            .create(new_user)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    static login(req, res) {
        User
            .findOne({
                email: req.body.email
            })
            .then((data) => {
                if(!data){
                    res.status(400).json({
                        message: `Wrong username/password`
                    })
                }
                else {
                    let isValid = bcrypt.compareSync(req.body.password, data.password)
                    if(isValid){
                        let token = jwtConvert.sign({
                            email: data.email
                        })
                        console.log(token)
                        res.status(200).json(token)
                    }
                    else{
                        res.status(400).json({
                            message: `Wrong username/password`
                        })
                    }
                }
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = UserController