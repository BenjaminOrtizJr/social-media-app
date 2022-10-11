const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    postComment: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Comment", commentSchema)