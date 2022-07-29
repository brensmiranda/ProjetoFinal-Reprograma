
const Student = require("../models/studentsModel");


///registrando o estudante
const studentRegister = async (req, res) => {

try {
    const newStudent = new Student({
nome: req.body.nome,
nomeResponsavel: req.body.nomeResponsavel,
dataNascimento: req.body.dataNascimento,
endereco: req.body.endereco,
escolaMatriculado: req.body.escolaMatriculado,
numeroMatricula: req.body.numeroMatricula

    })

const matriExist = await Student.findOne({numeroMatricula: req.body.numeroMatricula})
if(matriExist){
    return res.status(400).json({
        error: "Outro aluno já está cadastrado utilizando essa matrícula! "
    })
}

const studentSave = await newStudent.save();
res.status(201).json({
    message: "Aluno cadastrado com sucesso!",
    studentSave
})


} catch (error) { 
    res.status(500).json({
        message: error.message
    })
    
}
}

/// buscando todos estudantes
const allStudents = async (req, res) => {
    try {

        const allRegistered = await Student.find();
        res.status(200).json({
            message: "Todos os alunos:",
            allRegistered
        })

        if(Student.length == 0){
            return res.status(400).json({
                message: "Nenhum Aluno foi encontrado."
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    } 
}

/// buscando todos por ID - incorreto
const allStudentsId = async (req, res) => {

    try {

        const allRegisteredId = await Student.findById(req.params.id);
        if(!Student){
            return res.status(404).json({message: "Id não encontrado!"})
        }
        
res.status(200).json({
    message: "Aluno:",
    allRegisteredId
})

    } catch (error) {
        res.sttatus(500).json({
            message: error.message
        })
    }
}


const updateStudentId = async (req, res) => {
try {
    
const { nome, nomeResponsavel, emailResponsavel, dataNascimento, endereco, escolaMatriculado, numeroMatricula} = req.body;
const student = await Student.findById(req.params.id);

if(!student){

    return res.status(404).json({message: "Estudante não encontrado."})
}
   
student.nome = nome || student.nome
student.nomeResponsavel = nomeResponsavel || student.nomeResponsavel
student.emailResponsavel = emailResponsavel|| student.emailResponsavel
student.endereco = endereco|| student.endereco

const UpdatedStudent = await student.save();

res.status(200).json({
    message: "Estudante atulizado com sucesso!",
    UpdatedStudent
})


} catch (error) {
    res.status(500).json({
        message: error.message
    })
}

}

const deleteStudentId = async (req, res) => {
try {
    const student = await Student.findById(req.params.id);
    if(!student){
        return res.status(404).json({message: "Aluno não encontrado."})
    }

    await student.delete();
    res.status(200).json({
        message: "Estudante deletado com sucesso!"
    })

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}

}




module.exports = {
studentRegister,
allStudents,
allStudentsId,
updateStudentId,
deleteStudentId

}