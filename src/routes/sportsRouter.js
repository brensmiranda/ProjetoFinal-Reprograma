const express = require('express'); 
const router = express.Router();
const sportsController = require("../controllers/sportsController");

router.post("/cadastrar", sportsController.createSport);
router.delete("/deletar/:id", sportsController.deleteSport);



module.exports = router; 