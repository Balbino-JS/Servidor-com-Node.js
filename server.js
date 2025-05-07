import express from 'express'
import { PrismaClient } from '@prisma/client'
const {PrismaClient} = pkg

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

/*Salvar os usuários */
app.post('/usuarios', async (req, res) => {

   await prisma.user.create({
    data: {
        name: req.body.name,
        testimony: req.body.testimony
    }
   })

    res.status(201).json(req.body)
})

/*rota listar usuários */
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
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

    usuarui do mosngoDB
    balbinojteste senha: T1V4YYmqTFtCY0jg
*/

