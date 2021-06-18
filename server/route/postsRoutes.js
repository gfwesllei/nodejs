const express = require('express')
const router = express.Router();
const postService = require('../service/postService')

router.get('/posts',async function(req,resp){
    const posts = await postService.getPosts()
    resp.json(posts)
})
router.get('/posts/:id',async function(req,resp){

})
router.post('/posts',async function(req,resp){
    const post =req.body;
    const newPost = await postService.savePost(post)
    resp.json(newPost)
})
router.put('/posts/:id',async function(req,resp){
    const post =req.body;
    await postService.updatePost(req.params.id,post)
    resp.end()
})
router.delete('/posts/:id',async function(req,resp){

})

module.exports = router