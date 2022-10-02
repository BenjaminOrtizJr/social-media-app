const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: false
    },
    postImage: {
        type: String,
        required: false
    },
    postContent: {
        type: String,
        required: false
    },
    postComment: {
        type: String,
        required: false
    }
});

const Post = mongoose.model("Post", PostSchema)
module.exports = Post