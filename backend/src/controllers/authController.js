const asyncHandler = require('express-async-handler')
const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

const loginUser = asyncHandler(async (req, res) => {
    const {email , password} = req.body

    let user = await userModel.findOne({email})
    // console.log(email, password)
    
    if(user && (await user.checkPassword(password))){
        let token = jwt.sign({id : user._id}, "WE_CON_SECRET" , {
            expiresIn : '7d'
        })

        let expTime = new Date()
        expTime.setDate(expTime.getDate() + 7) 

        let cookieOptions = {
            httpOnly : true,
            expires : expTime,
            origin : 'we-connect-now.vercel.app',
            sameSite : 'none',
            secure : true
        }

        res.cookie("weConnectUserCookie", token, cookieOptions)
        // console.log(res.cookie, req.cookies, 'AUTH CONTROLLER')
        return res.status(200).send({user, token})
        
    }else{
        return res.status(403).send({
            message : "Unauthorized access"
        })
    }
})

const signUpUser = asyncHandler(async (req, res) => {
    const {userName, email, password, avatar} = req.body

    if(!userName || !email || !password){
        return res.status(400).send("Incomplete fields")
    }

    let user = await userModel.findOne({email})
    if(user){
        return res.status(403).send({
            message : "Email already exists"
        })
    }
    let userCreate = await userModel.create(req.body)

    if(userCreate){
        let token = jwt.sign({id : userCreate._id}, "WE_CON_SECRET" , {
            expiresIn : '7d'
        })

        let expTime = new Date()
        expTime.setDate(expTime.getDate() + 7) 

        let cookieOptions = {
            httpOnly : true,
            expires : expTime,
            origin : 'we-connect-now.vercel.app',
            sameSite : 'none',
            secure : true
        }

        res.cookie("weConnectUserCookie", token, cookieOptions)
        
        return res.status(200).send({
            user: userCreate,
            token
        })
    }else {
        return res.status(403).send({
            message : "Could not create the user"
        })
    }
})

module.exports = { loginUser , signUpUser }