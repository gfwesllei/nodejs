const db = require('../infra/fireBase')


exports.save = async function(user){

    const usersDb = db.collection('users1'); 

    const newUser = usersDb.doc(); 

    await newUser.set({
        first: 'Liam',
        last: 'Ragozzine',
        address: '133 5th St., San Francisco, CA',
        birthday: '05/13/1990',
        age: '30'
    });   

    return null;
}

