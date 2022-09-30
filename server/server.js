const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const PostModel = require('./models/posts')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://bortizjr84:Silent84@social-db.ocgpivo.mongodb.net/social-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/read', async (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

app.post('/insert', async (req, res) => {
    const PostImage = req.body.postImage
    const PostContent = req.body.postContent
    
    const post = new PostModel({ postImage: postImage, postContent: postContent });
    
    try {
        await post.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

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

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    await PostModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001...')
})