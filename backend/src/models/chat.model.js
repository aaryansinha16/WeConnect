const { Schema, model, default: mongoose } = require("mongoose");

const chatSchema = new Schema({
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }],
    groupChatType : {type: Boolean, default : false},
    name : {type : String },
    admin : {type : mongoose.Schema.Types.ObjectId , ref : 'user'},
    recentMessage : {type : mongoose.Schema.Types.ObjectId, ref : 'message'}
}, {timestamps : true})

const chatModel = model("chat", chatSchema)

module.exports = chatModel