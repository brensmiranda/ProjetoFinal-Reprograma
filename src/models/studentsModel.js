const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

nome: {
    type: String,
    required: true
},

nomeResponsavel: {
    type: String,
    required: true,
},

dataNascimento: {
type: Date,
required: true
},

endereco: {
    type: String,
    required: true
},

escolaMatriculado: {
    type: String,
    required: true
},

numeroMatricula: {
    type: Number,
    required: true
}, 

user:{
    type: mongoose.Schema.Types.ObjectId, 

    required: true,
    ref: "Usuario"
}

}, {timestamps: true})

module.exports = mongoose.model("Aluno", studentSchema)