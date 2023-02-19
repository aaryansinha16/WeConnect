const {default: mongoose} = require("mongoose")

const dbConnect = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/we-connect')
    }catch(e){
        console.log("Error", e)
        process.exit()
    }
}

module.exports = dbConnect