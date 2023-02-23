const express = require('express')
const tokenCheck = require('../middlewares/tokenCheck')
const app = express.Router()

// GET chat (group or individual)
app.get('/', tokenCheck , async(req, res) => {

})

// reach chat 
app.post('/', tokenCheck, async(req, res) => {

})

// create chat (Group)
app.post('/create-group', tokenCheck , async(req ,res) => {

})

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