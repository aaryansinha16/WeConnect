const express = require('express')
const tokenCheck = require('../middlewares/tokenCheck')
const app = express.Router()

app.get("/get-all-messages/:chat-id", tokenCheck , async (req ,res) => {

})

app.post("/send-message" , tokenCheck , async ( req, res ) => {
    
} )

module.exports = app