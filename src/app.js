const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv-safe').config();

const db = require('./config/mongoConfig');
///const rotasAlunos = require('./routes/AlunosRotas')


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
res.status(200).send({ 
title: "Reprograma -> Fórmula Mágia da Paz - Projeto Final",
version: "1.0.0",
mensagem: "Bem-vindo ao meu projeto final!"

})

})

const studentsRoutes = require("./routes/studentsRoter");
const userRoutes = require("../src/routes/userRouter");
const sportsRoutes = require("../src/routes/sportsRouter");


app.use ("/aluno", studentsRoutes);
app.use("/usuario", userRoutes);
app.use("/esporte", sportsRoutes);


db.connect();
///app.use("/alunos", rotasAlunos);

module.exports = app; 