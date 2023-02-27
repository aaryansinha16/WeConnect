const express = require('express')
const { reachChat , getAllChats, createGroup } = require('../controllers/chatController')
const tokenCheck = require('../middlewares/tokenCheck')
const app = express.Router()

// GET chat (group or individual)
app.get('/', tokenCheck , getAllChats )

// reach chat 
app.post('/', tokenCheck, reachChat)

// create chat (Group)
app.post('/create-group', tokenCheck , createGroup)

// rename
app.patch('/rename-group' , tokenCheck , async(req, res) => {

})

// remove anybody from group
app.put('/remove', tokenCheck, async(req, res) => {

})

//add anyone to group
app.put('/add-someone', tokenCheck, async(req, res) => {
    
})

module.exports = app