const {default: mongoose} = require("mongoose")
require('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL

const dbConnect = async () => {
    // console.log("TEST", DATABASE_URL)
    try{
        await mongoose.connect(DATABASE_URL)
    }catch(e){
        console.log("Error", e)
        process.exit()
    }
}

module.exports = dbConnect