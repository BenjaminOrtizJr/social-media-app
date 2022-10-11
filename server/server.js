const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const PostModel = require('./models/posts')
const CommentModel = require('./models/comments')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://bortizjr84:Silent84@social-db.ocgpivo.mongodb.net/social-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

// GET Request
app.get('/read', async (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

// POST Request
app.post('/insert', async (req, res) => {
    const postTitle = req.body.postTitle
    const postImage = req.body.postImage
    const postContent = req.body.postContent
    
    const post = new PostModel({ postTitle: postTitle, postImage: postImage, postContent: postContent });
    
    try {
        await post.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

// Update Request
app.put('/update', async (req, res) => {
    const editPost = req.body.editPost
    const id = req.body.id
    
    try {
        await PostModel.findById(id, (err, updatedPost) => {
            updatedPost.postName = editPost
            updatedPost.save()
            res.send("update")
        })
    } catch (err) {
        console.log(err)
    }
})

// Delete Request
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    await PostModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

// Get Comments by post id
app.get('/read/:id', (req, res, next) => {
    CommentModel.find({ id: req.params._id }, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Post Comment
app.post("/insert/comment", async (req, res, next) => {
    const id = req.params._id
    const postComment = req.body.postComment
    
    const comment = new CommentModel({ id: id, postComment: postComment });

    try {
        await comment.save()
        res.send("inserted comment")
    } catch (err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log('Server is running on port 3001...')
})