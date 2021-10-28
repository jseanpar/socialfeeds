const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) =>{
    const token = req.headers["x-access-token"]

    if(!token){
        return res.status(200).json({"error" : "Token no válido"});
    }else {
        jwt.verify(token, "jwtSecret", (error, decoded) => {
            if(error){
                return res.status(500).json({"auth" : false, message: "Ha fallado la Autentificación"});
            }else{
                res.userId = decoded.id
                next();
            }
        })
    }
}

module.exports = verifyJWT