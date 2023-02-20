const express = require('express')
const { loginUser, signUpUser } = require('../controllers/authController')
const app = express.Router()

app.post('/login', loginUser)

app.post("/signup", signUpUser)

module.exports = app