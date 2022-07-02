// Takes in Express
const express = require("express")
// Initiates everything Express object has to a variable
const app = express()
// Middlewares
const cors = require("cors")
// Implementation of use local .env file
require("dotenv").config()
// Imports routs to be accessed from server
const postRouter = require("./api/posts")

const mongoose = require("mongoose")

// MIDDLWARES

// Middleware - catches request and make some operation before response. Ex. checks if data is secure
app.use(cors())
// Middleware which parses data to JSON before it comes to a server if it's not parsed jet
app.use(express.json())

// Middleware http://localhost:5000/api/getposts or another one ex. /updatepost
// If there is /api prefix it goes to routs in post.js 
app.use("/api", postRouter)

// Connects to Database
mongoose.connect(
    process.env.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true }, 
    () => console.log("Connected to DB")
)

const PORT = process.env.PORT

// Listening for requests on Port 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
