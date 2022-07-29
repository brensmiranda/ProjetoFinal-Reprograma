const express = require('express');
const router = express.Router();
const studentController = require("../controllers/studentsController");

router.post("/cadastrar", studentController.studentRegister);
router.get("/listar", studentController.allStudents);
router.get("/listar/:id", studentController.allStudentsId);
router.put("/atualizar/:id", studentController.updateStudentId);
router.delete("/deletar/:id", studentController.deleteStudentId);

module.exports = router;