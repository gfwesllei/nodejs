const userData = require('../data/userData')


exports.save = function(user){

    console.log(userData)

    
    return userData.save(user);
}