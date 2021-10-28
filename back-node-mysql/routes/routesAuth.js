const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const verifyJWT = require('../middleware/auth')


routes.post('/', (req, res) =>{
    try{
        const username = req.body.username;
        const password = req.body.password;

        req.getConnection((err, conn) => {
            if(err) return res.send(err)
          
            conn.query(`select id,name from users where email = ? and password = ?`, [username,password], (err, rows) => {
                if(err) return res.send(err)
                
                if(rows.length > 0){
                    const id = rows.id
                    const name = rows.name
                    const token = jwt.sign({id , name}, "jwtSecret", {
                        expiresIn : 300,
                    })
                    res.status(200).json({auth: true, token, rows });
                }else{
                    res.status(200).json({ "error" : "Usuario o password incorrectos" });
                }
               
            })
    })
    }catch(error){
        console.log(error);
        return res.status(500).json({"Error Interno del servidor" : error });
    }

})

routes.get("/isUserAuth", verifyJWT, (req, res) => {
    try {
      res.status(200).json({"auth" : true, message : "respuesta ok"});
    } catch (error) {
      console.log(error);
      return res.status(500).json({"Error Interno del servidor" : error });
    }
  });

module.exports = routes