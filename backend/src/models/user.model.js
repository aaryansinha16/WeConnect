const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    userName : {type : String, required : true},
    email : {type : String , required : true},
    password : {type : String , required : true},
    avatar : {type : String},
    admin : {type : Boolean, default : false, required : true}
}, {timestamps : true})


userSchema.methods.checkPassword = async function(inputPassword){
    return await bcrypt.compare(inputPassword, this.password)
}

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
      next();
    }
    const hashed = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, hashed);
  });

const userModel = mongoose.model("user" , userSchema)

module.exports = userModel
