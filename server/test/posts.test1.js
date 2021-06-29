// const axios = require("axios")
// const crypto = require('crypto')
// const postServices = require('../service/postService')

// const generateRandoString=function(){
//     return crypto.randomBytes(20).toString('hex')
// }

// request = function(url,method,data){
//     return axios({
//         url,
//         method,
//         data
//     })
// }

// test('Should get posts', async function(){

//     //given
//     let post1 = await postServices.savePost({title:generateRandoString(),content:generateRandoString()})
//     let post2 = await postServices.savePost({title:generateRandoString(),content:generateRandoString()})
//     let post3 = await postServices.savePost({title:generateRandoString(),content:generateRandoString()})

//     //when
//     const response = await request('http://localhost:3000/posts','get')

//     //then
//     expect(response.data).toHaveLength(3)

//     await postServices.deletePost(post1.id)
//     await postServices.deletePost(post2.id)
//     await postServices.deletePost(post3.id)  

// })

// test('Should save posts', async function(){

//     //given
//     let data = {title:generateRandoString(),content:generateRandoString()}
   
//     //when
//     const response = await request('http://localhost:3000/posts','post',data)

//     const post = response.data;

//     //then
//     expect(post.title).toBe(data.title)

//     await postServices.deletePost(post.id)
   
// })

// test('Should update a Post',async function(){
   
//     const post = await postServices.savePost({title:generateRandoString(),content:generateRandoString()})
//     post.title = generateRandoString();
//     post.content = generateRandoString();
    
//     await request(`http://localhost:3000/posts/${post.id}`,'put',post)

//     const updatePost = await postServices.getPost(post.id);

//     expect(updatePost.title).toBe(post.title)
//     expect(updatePost.content).toBe(post.content)

//     await postServices.deletePost(post.id)
// })