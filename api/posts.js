const express = require("express")
// Instantiates Router from Express
const postRouter = express.Router()
const Post = require("../models/Post")

// ENDPOINTS

// Get request
postRouter.get("/getposts", (req, res)=> {
    Post.find({}, (err, documents) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while retrieving post",
                    msgError: true
                }
            })
        } else {
            res.status(200).json({
                posts: documents
            })
        }
    })
})

// Post request
postRouter.post("/newpost", (req, res) => {
    console.log("Post to add: ", req.body)
    // Creats new document with Post model
    const newPost = new Post({
        title: req.body.title,
        year: req.body.year,
        color: req.body.color
    })
    // Saves to Databse
    newPost.save((err) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while saving post",
                    msgError: true
                }
            })
        } else {
            res.status(201).json({
                msg: {
                    msgBody: "Post was saved",
                    msgError: false
            }
        })
        }
    })
})

// Put request
postRouter.put("/updatepost/:id", (req, res) => {
    Post.findByIdAndUpdate(req.params.id, {title: req.body.title, year: req.body.year, color: req.body.color}, (err) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while updating post",
                    msgError: true
                }
            })
        } else {
            res.status(200).json({
                msg: {
                    msgBody: "Post was updated",
                    msgError: false
                }
            })
        }
    })
})

// Delete request
postRouter.delete("/deletepost/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(500).json({
                msg: {
                    msgBody: "An error occured while deleting post",
                    msgError: true
                }
            })
        } else {
            res.status(200).json({
                msg: {
                    msgBody: "Post was deleted",
                    msgError: false
                }
            })
        }
    })
})

// Exports router
module.exports = postRouter