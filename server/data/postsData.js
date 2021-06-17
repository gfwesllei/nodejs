const database = require('../infra/dataBase')

exports.getPosts = function(){
    return database.query('select * from blog.post')
}