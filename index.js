const express = require('express')
const server = express()

server.listen(4000, function(){
    console.log('Olá mundo')
})

server.route('/').get((req, res)=>{
    res.json(server)
})