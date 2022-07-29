const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
id: mongoose.Schema.Types.ObjectId,

email: {
type: String,
required: true,
unique: true,
lowercase: true
},


password: {
type: String,
required: true,
select: false
}

}, {timestamps: true})


module.exports = mongoose.model("Usuario", userSchema)
