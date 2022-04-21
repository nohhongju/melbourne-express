import db from '../models/index.js'

export default function BoradService(){

    const Board = db.board
    
    return{
        boardform(req, res){
            console.log(' ### 진행 4 : 노드서버에 진입함'+JSON.stringify(req.body))
            new Board(req.body).save(() => {
                res.status(200).json({'result':'ok'})
            })
        },
        boardlist(_req, res){
            console.log(`### boardController access !!!`)
            Board.find()
            .exec((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).send({ success: true, boards})
            })
        }
    }
}