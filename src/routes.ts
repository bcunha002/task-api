import express from 'express'
import { tasksController } from './controllers/tasks-controller'

// Permtir trabalhar com rotas na aplicação
const router = express.Router()

// Criando uma rota. Passando uma função, permitindo retornar uma resposta json, contendo um objeto contendo uma msg
router.get('/', (req, res) => res.json({hello: 'Hello'}))

// Criando as rotas de Atividades
router.get('/tasks', tasksController.index)
router.post('/tasks', tasksController.save)
router.get('/tasks/:id', tasksController.show)
router.put('/tasks/:id', tasksController.update)
router.delete('/tasks/:id', tasksController.delete)
router.put('/concluir/:id', tasksController.concluir)
router.put('/reabrir/:id', tasksController.reabrir)


export { router }
