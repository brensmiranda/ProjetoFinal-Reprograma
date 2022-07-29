const Users = require("../models/studentUser");
const { hashPassword } = require("../helpers/hashPassword");

const createUser = async (req, res) => {

try {
const {email, password} = req.body


const newUser = new Users({
    email,
    password

})

const user = await Users.findOne({email: req.body.email});

if(user) {
    res.status(400).json({ message: "Usuário já está cadastrado no sistema!"});
}

const userSave = await newUser.save();

res.status(201).json({
    message: "Cadastrado efetuado com sucesso!",

    userSave
})

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}


}


const allUsers = async (req, res) => {

const AllusersRegistered = await Users.find();
res.status(200).json({
    message: "Todos os usuários",
    AllusersRegistered
})

if(Users.length == 0){
    return res.status(400).json({
        message: "Nenhum usuário foi encontrado."
    })
}

}




const deleteUser = async (req, res) => {

try {

    const delUser = await Users.findById(req.params.id);
    if(!delUser){
        return res.stauts(404).json({message: "User não encontrado."})
    }
    
await delUser.delete();
res.status(200).json({
    message: "User deletado com sucesso!"
})

} catch (error) {
    res.status(500).json({
        message: error.message
    })
    
}

}

module.exports = {
createUser,
deleteUser,
allUsers

}