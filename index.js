const express = require('express')
const app = express()
const port = 3000

// rota 

app.get('/', (req, res) =>{
    res.send('ROTA ACESSADA COM SUCESSO!')
})

//segunda rota 

app.get('/segundarota', (req, res)=>{
    res.send('<h1>SEGUNDA ROTA</h1>')
})

app.listen(port, ()=>{
    console.log('SERVIDOR FUNCIONANDO')
})

