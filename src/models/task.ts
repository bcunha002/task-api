import { sequelize } from '../database'
import { DataTypes, Model } from 'sequelize'

interface TaskInstance extends Model {
    id: number
    title: string
    description: string
    complete: boolean
}

const Task = sequelize.define<TaskInstance>(
    'tasks',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complete: DataTypes.BOOLEAN,
        completeAt: DataTypes.DATE
    }
)

export { Task }