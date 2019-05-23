const express = require('express')
const {
     Users
} = require('../dbconfig')
const route = express.Router();

route.get('/',
     async (req, res) => {
          res.send(await Users.findAll())
     })

route.post('/',
     async (req, res) => {
          const newUsers = await Users.create({
               username: req.body.username,
               password: req.body.password,
               email: req.body.email,
          })

          res.send(newUsers);


     })
module.exports = route;