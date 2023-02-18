const { Schema, model, default: mongoose } = require("mongoose");

const messageSchema = new Schema({
    sender : {type : mongoose.Schema.Types.ObjectId , ref : 'user'},
    messageReadBy : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : 'user'
        }
    ],
    message : {type : String },
    chatWith : {type : mongoose.Schema.Types.ObjectId , ref : 'chat'}
}, {timestamps : true})

const messageModel = model('message', messageSchema)

module.exports = messageModel