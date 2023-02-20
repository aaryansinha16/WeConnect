// ? Imports
// * Essentials
const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")

// * Database
const dbConnect = require('./config/dbConnect')
// * Routes import
const authRouter = require('./routes/auth.router')
const userRouter = require('./routes/user.router')

// * Environment variables
require("dotenv").config()
const port = process.env.PORT || 3000

const colors = require("colors")

dbConnect()  //? For connection with db 

const app = express()

app.use(express.json())
app.use(cors())

// SocketIO & Server 
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

// Routes
app.use('/auth', authRouter)
app.use('/user', userRouter)

// Server test
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

console.log('hello'.green);
// Listener
server.listen(port, async () => {
    console.log(`Server started on http://localhost:3000`)
})