import dotenv from 'dotenv'
import express from 'express';
import db from './app/models/index.js'
import apiRouter from './app/routes/api.js'
import basicRouter from "./app/routes/basic.js"
import boardRouter from "./app/routes/board.js"
import userRouter from "./app/routes/user.js"
import indexRouter from "./app/routes/index.js"
import todoRouter from "./app/routes/todo.js"
import ResponseService from './app/services/responseService.js'

async function startServer() {
    dotenv.config()
    const app = express();
    const mongoUri = process.env.MONGO_URI
    const port = process.env.PORT
    // app.use('/token', tokenRouter);
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use("/", indexRouter);
    app.use("/api", apiRouter);
    app.use("/basic", basicRouter);
    app.use("/board", boardRouter);
    app.use("/todo", todoRouter);
    app.use("/user", userRouter);
    const responseService = new ResponseService()


    db.mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log(' 몽고 DB 연결 성공 ')
        })
        .catch(err => {
            console.log('몽고DB와 연결 실패', err)
            process.exit();
        })
        app.all("*", function(_req, res) {
            return responseService.notFoundResponse(res, "페이지를 찾을 수 없습니다");
        });
          
        app.use((err, _req, res) => {
            if(err.name == "UnauthorizedError"){
              return responseService.unauthorizedResponse(res, err.message);
            }
        });
    app.listen(port, () => {
            console.log('***************** ***************** *****************')
            console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
            console.log('***************** ***************** *****************')
    })
}
startServer()
