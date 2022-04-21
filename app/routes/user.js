import express from 'express'
import cors from 'cors'
import UserService from '../services/userService.js'


const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function(_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
app.post('/join', cors(corsOptions),(req, res) => {
    UserService().join(req, res)
})
app.post('/login', cors(corsOptions),(req, res) => {
    UserService().login(req, res)
    
})
export default app