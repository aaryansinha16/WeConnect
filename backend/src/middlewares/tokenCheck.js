const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')

const tokenCheck = asyncHandler(async ( req, res, next ) => {
    // console.log("TOKEN CHECK",req.cookies)
    if(req.cookies.weConnectUserCookie){
        try{
            // console.log("TOKEN_CHECK : ", req.headers.authorization)
            let token = req.cookies.weConnectUserCookie
    
            const decodedId = jwt.verify(token, "WE_CON_SECRET")
            req.user = await userModel.findById(decodedId.id).select('-password')
            return next()
        }catch(e){
            return res.status(401).send("Unauthorized , wrong/invalid token")
        }
    }

    return res.status(401).send("No Token")
})

module.exports = tokenCheck