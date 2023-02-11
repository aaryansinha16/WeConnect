const express = require("express")
const cors = require("cors")
const http = require("http")
require("dotenv").config()
const PORT = process.env.PORT

const server = http.createServer(() => {
    
})

const app = express()

app.use(express.json())
app.use(cors())
// console.log(PORT, process.env,  'THIS IS PORT')

app.get("/", (req, res) => {
    res.send("Server is working fine")
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:3000`)
})