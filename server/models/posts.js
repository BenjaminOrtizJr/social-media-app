const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

const Post = mongoose.model("Post", PostSchema)
module.exports = Post