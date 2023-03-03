// ? Imports
// * Essentials
const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")
const cookieParser = require('cookie-parser')

// * Database
const dbConnect = require('./config/dbConnect')
// * Routes import
const authRouter = require('./routes/auth.router')
const userRouter = require('./routes/user.router')
const messagesRouter = require('./routes/messages.router')
const chatRouter = require("./routes/chat.router")

// * Environment variables
require("dotenv").config()
const port = process.env.PORT || 3000

const colors = require("colors")

dbConnect()  //? For connection with db 

const app = express()

app.use(express.json())
var corsOptions = {
    origin: [
        "https://we-connect-now.vercel.app",
        "http://localhost:5173"
    ],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
    credentials: true, 
    exposedHeaders: ['*', 'Authorization' ] 
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(cookieParser())

// SocketIO & Server 
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

//Test cookie route
app.get('/', (req, res) => {
    console.log("COOKIE:", req.cookies)
    res.send({
        cookie: req.cookies,
        message: 'working'
    })
})
app.post('/', (req, res) => {
    let exp = new Date()
    exp.setDate(exp.getDate() + 10)
    let cookieOptions = {
        httpOnly : true,
        expires : exp,
        origin : 'http://localhost:5173',
        sameSite : 'none',
        secure : true
    }
    res.cookie('testCookie', "aaryan", cookieOptions)
    res.send("cookie created")
})

app.get('/logout', (req, res) => {
    res.clearCookie("testCookie")
    res.send("Logged out")
})

// Routes
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/messages', messagesRouter)
app.use('/chat', chatRouter)



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

// Listener
server.listen(port, async () => {
    console.log(`Server started on http://localhost:3000`)
})