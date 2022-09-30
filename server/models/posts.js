const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postImage: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", PostSchema)
module.exports = Post