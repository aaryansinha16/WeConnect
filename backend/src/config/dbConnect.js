const {default: mongoose} = require("mongoose")

const dbConnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/we-connect')
}

module.exports = dbConnect