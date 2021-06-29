const crypto = require('crypto')
const alunoService = require('../service/alunoService')

const generateRandoString=function(){
    return crypto.randomBytes(20).toString('hex')
}

test('Should create users', async function(){

    //given
    let alunos = await alunoService.save({name:generateRandoString(),email:"email@teste.com",password:"TW2020"})   

    console.log(alunos)

    //then
    expect(alunos).toBeTruthy();

})

test('Should findOne users', async function(){

    //given
    let savedAluno = await alunoService.save({name:generateRandoString(),email:"email@teste.com",password:"TW2020"})  
    //then
    let alunoDB = await alunoService.findOne({_id:savedAluno._id})   
    //then
    expect(alunoDB).toBeTruthy();
    expect(alunoDB).

})

