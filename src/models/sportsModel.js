const mongoose = require('mongoose');

const sportsModel = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

esporte: {
type: String,
required: true

}


})

module.exports = mongoose.model('Esporte', sportsModel)