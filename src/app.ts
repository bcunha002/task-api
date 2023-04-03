// Importar o dotenv bem no começo para que as variáveis de ambiente ja estejam disponíveis
import dotenv from 'dotenv'
// para deixar o dotenv funcionando
dotenv.config()

// Importar o express
import express from 'express'
import { router } from './routes'

const app = express()

// Diz ao Express que esperamos receber um corpo da requisição no formato json (vai entender o corpo da requisição)
// ex: em condates
app.use(express.json())

// Dizer ao app usar esse router
app.use(router)

// Usa a variável de ambiente PORT, se não existir utiliza 3000
const PORT = process.env.PORT|| 3000

// permitir ficar ouvindo a porta. retorna mensagem caso seja iniciada
app.listen(PORT, () => {
  console.log('Started!')
})
