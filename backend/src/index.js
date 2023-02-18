const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")
require("dotenv").config()
const PORT = process.env.PORT


const app = express()

app.use(express.json())
app.use(cors())
// console.log(PORT, process.env,  'THIS IS PORT')

app.get("/", (req, res) => {
    res.send("Server is working fine")
})

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

var totalUser = 0
io.on("connection", (conn) => {
    totalUser += 1
    console.log("CONNECT", totalUser)
    io.emit("new-connection", {userConnected : totalUser})

    conn.on('new review', async ({rating, review, userId, productId}) => {
        // if(review == ""){
        //     let reviews = await reviewModel.find({productId}).populate("userId")
        //     io.emit("new review", {reviews, avgRating : undefined})
        //     return
        // }
        // let data = await reviewModel.create({rating, review, userId, productId})

        // let allRatings = await reviewModel.find({productId})
        // let avgRating = 0
        // var sum = 0
        // for(var i = 0; i<allRatings.length; i++){
        //     sum += allRatings[i].rating
        // }
        // // console.log(sum , allRatings.length, sum/allRatings.length)
        // avgRating = sum / allRatings.length
        // let test = await productModel.findByIdAndUpdate(productId, {ratings: Math.floor(avgRating)}, {new : true})
        // // console.log('AVERAGE',test, avgRating, sum )
        // // console.log("Not happening")
        // // console.log('DATA FROM FRONTEND',rating, review, userId, productId)
        // let reviews = await reviewModel.find({productId}).populate("userId")
        // io.emit("new review", {reviews, avgRating})
    })

    conn.on("disconnect", () => {
        totalUser -= 1
        console.log("DISCONNECT", totalUser)
    })
})

server.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
})