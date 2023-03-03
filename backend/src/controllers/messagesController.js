const asyncHandler = require("express-async-handler");
const chatModel = require("../models/chat.model");
const messageModel = require("../models/message.model");
const userModel = require("../models/user.model");

const getAllMessages = asyncHandler(async (req ,res) => {
    try{
        let allMesssages = await messageModel.find({ chatWith : req.params.chatId })
        .populate('chatWith')
        .populate("sender", "userName email avatar")

        return res.send({
            allMesssages
        })
    }catch(e){
        return res.status(400).send(e.message)
    }
})

const sendMessage = asyncHandler ( async (req, res) => {
    let {chatId, message} = req.body

    if(!chatId || !message) { 
        return res.status(400).send("Either chatId or message missing")
    }

    try{
        let createdMessage = await messageModel.create({
            sender : req.user._id,
            message : message,
            chatWith : chatId
        })
        
        createdMessage = await createdMessage.populate("sender", "userName avatar")
        createdMessage = await createdMessage.populate("chatWith")
        createdMessage = await userModel.populate(createdMessage, {
            path: "chatWith.users",
            select: "userName avatar email",
        });

        await chatModel.findByIdAndUpdate(chatId, {recentMessage : createdMessage})

        res.send(createdMessage)
    }catch(e){
        return res.status(400).send(e.message)
    }
} )

module.exports = {getAllMessages, sendMessage}
