// Construir uma instância para permitir conectar ao banco de dados

import { Sequelize } from 'sequelize'

const dbUrl = process.env.DATABASE_URL || ''

const sequelize = new Sequelize(dbUrl, {
  define: {
    underscored: true // opção para dizer que quer trabalhar snake_case no banco de dados, e na aplicação será usado o camelCase 
  }
})

export { sequelize }
