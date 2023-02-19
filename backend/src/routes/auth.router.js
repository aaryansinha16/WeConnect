const express = require('express')
const userModel = require('../models/user.model')
const app = express.Router()

app.post('/login', async (req, res) => {
    const {email , password} = req.body

    let user = await userModel.findOne({email})
    
    if(user && (await user.checkPassword(password))){
        try{
            return res.status(200).send({user})
        }catch(e){
            return res.status(403).send(e)
        }
    }else{
        return res.status(403).send({
            message : "Unauthorized access"
        })
    }

})

app.post("/signup", async(req, res) => {
    const {userName, email, password, avatar} = req.body

    let user = await userModel.findOne({email})
    if(user){
        return res.status(403).send({
            message : "Email already exists"
        })
    }
    try{
        let userCreate = await userModel.create(req.body)
        return res.status(200).send({
            user: userCreate
        })
    }catch(e){
        return res.status(403).send({
            message : e
        })
    }
})

module.exports = app