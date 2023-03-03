const express = require('express')
const tokenCheck = require('../middlewares/tokenCheck')
const app = express.Router()
const {getAllMessages, sendMessage} = require('../controllers/messagesController')

app.get("/get-all-messages/:chatId", tokenCheck , getAllMessages)

app.post("/send-message" , tokenCheck , sendMessage )

module.exports = app