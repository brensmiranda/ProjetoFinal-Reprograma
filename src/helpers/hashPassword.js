const bcrypt = require('bcrypt');




exports.hashPassword = async (req, res, next) => {

try {
    
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(req.body.password, salt);


req.body.password = hash

return next();

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}

}

