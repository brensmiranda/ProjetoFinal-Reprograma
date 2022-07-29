const Sports = require("../models/sportsModel");


const createSport = async (req, res) => {

try {
const newSport = new Sports({

esporte: req.body.esporte,

})

const sportSave = await newSport.save();
res.status(201).json({
    message: "Esporte cadastrado com sucesso!",
    sportSave
})


} catch (error) {
    res.status(501).json({
        message: error.message
    })
}


}

const deleteSport = async (req, res) => {

try {
    const sport = await Sports.findById(req.params.id);
    if(!sport) {
        return res.status(404).json({message: "Esporte não encontrado."})


await sport.delete();
res.status(200).json({
    message: "Esporte deletado com sucesso!"
})

    }
} catch (error) {
    res.status(501).json({
        message: error.message
    })
}



}

module.exports = {
    createSport,
    deleteSport
    
}