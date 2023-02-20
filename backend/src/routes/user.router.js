const express = require('express')
const { searchUsers } = require('../controllers/userController')
const tokenCheck = require('../middlewares/tokenCheck')

const app = express.Router()

app.get('/', tokenCheck , searchUsers)


module.exports = app