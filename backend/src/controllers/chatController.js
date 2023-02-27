const express = require('express')
const asyncHandler = require('express-async-handler')
const chatModel = require('../models/chat.model')
const messageModel = require('../models/message.model')

//Below controller if for creating OR getting a individual chat
// If the chat with a particular user is already present then return that, Otherwise create new chat.
const reachChat = asyncHandler( async (req, res) => {
    const {participantId} = req.body
    // return res.send(req.user)

    if(!participantId) return res.sendStatus(400)

    // Check if chat with participant is already created
    let createdChat = await chatModel.find({ 
        groupChatType : false, 
        $and : [
            { users : {$elemMatch : {$eq : participantId} }},
            { users : {$elemMatch : {$eq : req.user._id} }}
        ] 
    }).populate('recentMessage').populate("users", "-password")

    createdChat = await messageModel.populate(createdChat , {
        path : 'recentMessage.sender',
        select : 'userName avatar email'
    })

    if(createdChat.length > 0) return res.send(createdChat[0])

    // Else we create a new chat
    try{
        let data = await chatModel.create({
            name : 'sender',
            groupChatType : false,
            users : [participantId , req.user._id]
        })

        let chat = await chatModel.findOne({_id : data._id}).populate('users', '-password')
        return res.send(chat)
    }catch(e){
        return res.status(400).send(e)
    }
})


// Below controller is for getting all the previous created chats of the user along with the recent message.
const getAllChats = asyncHandler ( async (req, res) => {
    try{
        let allChats = await chatModel.find({
            users : {$elemMatch : {$eq : req.user._id}}
        })
        .populate("admin" , '-password')
        .populate('users', '-password')
        .populate("recentMessage")
        .sort({updatedAt : -1})

        allChats = await messageModel.populate(allChats , {
            path : 'recentMessage.sender',
            select: 'userName avatar email'
        })
        return res.send(allChats)
    }catch(e){
        return res.status(400).send(e)
    }
})

//Below controller is for creating a group chat with 3 OR more then 3 users
const createGroup = asyncHandler (async (req, res ) => {
    if(!req.body.groupTitle || !req.body.members) return res.status(403).send("Either title OR member's name are missing")

    let members = JSON.parse(req.body.members)

    members.push(req.user) // Adding ourselves in the group is must!

    if(members.length <= 2) return res.status(403).send("There should be atleast 3 members in a group")

    try{
        let createdGroup = await chatModel.create({
            groupChatType : true,
            admin : req.user,
            users : members, 
            name : req.body.groupTitle
        })

        createdGroup = await chatModel.findOne({_id: createdGroup._id})
        .populate("users", "-password")
        .populate('admin' , '-password')
        
        return res.send(createdGroup)
    }catch(e){
        return res.status(400).send(e)
    }
})


module.exports = {reachChat , getAllChats , createGroup}