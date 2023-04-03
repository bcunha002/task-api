import { Request, Response } from 'express'
import { Task } from '../models/task'

const tasksController = {
    index: async (req: Request, res: Response) => {
        try {
            const tasks = await Task.findAll()
            return res.json(tasks)
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },

    save: async (req: Request, res: Response) => {
      const { title, description } = req.body

      try {
          const tasks = await Task.create({
            title,
            description,
            complete: false
          })
  
          return res.status(201).json(tasks)
      } catch (err) {
          if (err instanceof Error) {
              return res.status(400).json({ message: err.message })
          }
      }
  },
    
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const tasks = await Task.findByPk(id)
        return res.json(tasks)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },  

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, description } = req.body

    try {
        const [affectedRows, tasks] = await Task.update({
            title,
            description
        }, {
            where: { id },
            returning: true
        })

        return res.json(tasks[0])
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },
  
  delete: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await Task.destroy({
            where: { id: id }
        })

        return res.status(204).send()
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },

  concluir: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const [affectedRows, tasks] = await Task.update({
            complete: true,
            completeAt: new Date()
        }, {
            where: { id },
            returning: true
        })

        return res.json(tasks[0])
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },

  reabrir: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const [affectedRows, tasks] = await Task.update({
            complete: false,
            completeAt: null
        }, {
            where: { id },
            returning: true
        })

        return res.json(tasks[0])
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },
}

export { tasksController }
