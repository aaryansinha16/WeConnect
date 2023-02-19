const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")
const dbConnect = require('./config/dbConnect')
const authRouter = require('./routes/auth.router')
require("dotenv").config()
const port = process.env.PORT || 3000

dbConnect()

const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.use('/auth', authRouter)

app.get("/", (req, res) => {
    res.send("Server is working fine")
})


var totalUser = 0
io.on("connection", (conn) => {
    totalUser += 1
    console.log("CONNECT", totalUser)
    io.emit("new-connection", {userConnected : totalUser})

    conn.on("disconnect", () => {
        totalUser -= 1
        console.log("DISCONNECT", totalUser)
    })
})

server.listen(port, async () => {
    console.log(`Server started on http://localhost:3000`)
})