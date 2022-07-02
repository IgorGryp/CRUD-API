const mongoose = require("mongoose")

// Mongoose Post Model - how every object will be built
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
     year: {
        type: String,
        required: true
     },
     color: {
        type: String,
        required: true
     }
})

module.exports = mongoose.model("Post", PostSchema)