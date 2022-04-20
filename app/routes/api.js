import express from 'express'
import cors from 'cors'


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.get('/now', cors(corsOptions),(_req, res) => {
    res.json({"now": new Date().toLocaleString()})
})

export default app