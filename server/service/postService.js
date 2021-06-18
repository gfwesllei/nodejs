const postData = require('../data/postsData')

exports.getPosts = function(){
    
    return postData.getPosts();
}

exports.savePost= function(post){
    
    return postData.savePost(post);
}

exports.deletePost= function(id){

    return postData.deletePost(id);
}

exports.updatePost= function(id,post){

    return postData.update(id,post);
}

exports.getPost= function(id){

    return postData.getPost(id);
}