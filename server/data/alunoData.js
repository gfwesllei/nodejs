const client = require('../infra/mongoDB')

const getUserDB= async (collectname)=>{
     
    // Connect the client to the server

        if(!client.isConnected()){
            await client.connect();
        }
     
      // Establish and verify connection
      await client.db("testes").command({ ping: 1 });
      console.log("Connected successfully to server");

      return client.db("testes").collection(collectname)
}

const ALUNOS = 'alunos';

exports.save = async function(user){

    try {
    
        const alunos = await getUserDB(ALUNOS)
        const result = await alunos.insertOne(user)
        return user;

      } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
      }
      return {};
}

exports.findOne = async function(filter){
    
    try {
    
        const alunos = await getUserDB(ALUNOS)
        const result = await alunos.findOne(filter)
        return result;

      } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
      }
      return {};
}

