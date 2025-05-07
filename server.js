import express from 'express'

const app = express()
app.use(express.json())

const users = []

/*Salvar os usuários */
app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.send('Ok. post')
})

/*rota listar usuários */
app.get('/usuarios', (req, res) => {
    res.json(users)
})



app.listen(3000)


/* Criar a nossa API de Ussuários
   
    - Criar um usuário
    - Listar todos os usuário    
    - Editar um usuário
    - Deletar um usuário

*/


/*
    1) Tipo de rota  / Método HTTP
    2) Endereço
*/

