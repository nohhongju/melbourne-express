import express from 'express'
import cors from 'cors'
import TodoService from '../services/todoService.js'


const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.post('/addTask', cors(corsOptions),(req, res) => {
    const service = new TodoService()
    res.status(200).json(service.addTodo(req, res))
})

app.get('/get', cors(corsOptions),(req, res) => {
    const service = TodoService()
    res.status(200).json(service.getTodo(req, res))
})

export default app