const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) =>{
    try{
        req.getConnection((err, conn) => {
            if(err) return res.send(err)
            let regQuery = req.query['numReg'];
            const numReg = 10;
           
            let numRegister = (regQuery) ? regQuery : numReg;
            if(regQuery > numReg) {
                numRegister = numReg
            }
          
            conn.query(`select id, name, email, image from users limit ${numRegister}`, (err, rows) => {
                if(err) return res.send(err)
                res.status(200).json({total : rows.length, users : rows });
            })
    })
    }catch(error){
        console.log(error);
        return res.send('Error Interno del servidor'+ error)
    }

})

routes.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO users set ?', [req.body] , (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE users set ? WHERE id = ?', [req.body, req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE from users where id= ?', [req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes