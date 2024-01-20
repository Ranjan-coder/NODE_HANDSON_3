const express = require('express')
const route = express.Router()
const { login, register, about, contact } = require('../Controler/Api')
const { SpecificAuth } = require('../Middleware/Auth')

route.get('/login',SpecificAuth,login,)
route.get('/register',SpecificAuth,register)
route.get('/about',about)
route.get('/about',contact)

module.exports = route