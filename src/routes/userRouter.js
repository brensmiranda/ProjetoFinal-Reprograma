const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const {hashPassword} = require("../helpers/hashPassword");


router.post("/cadastrar", hashPassword, userController.createUser);
router.delete("/delete/:id", userController.deleteUser );
router.get("/todos", userController.allUsers);


module.exports = router; 