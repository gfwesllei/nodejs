const alunoData = require('../data/alunoData')


exports.save = function(aluno){
    
    return alunoData.save(aluno);
}

exports.findOne = function(filter){

    return alunoData.findOne(filter)
}