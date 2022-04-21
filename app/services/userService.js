import db from '../models/index.js'
import Repository from '../config/dbConfig.js'
import dotenv from 'dotenv'

export default function UserService(){

    const User = db.user
    const dbo = new Repository()
    const dbConnect = dbo.getDb();
    dotenv.config()

    return {
        join(req, res) {
            new User(req.body).save(function(err){
                if (err) {
                    res.status(500).send({ message: err });
                    console.log('회원가입 실패')
                    return;
                }
                else{
                    res.status(200).json({ok:'ok'})

                } console.log('회원가입 성공')
            })
             /**const matchDocument = {
                userid: req.body.userid,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                birth: req.body.birth,
                address: req.body.address
            };
            dbConnect
                .collection("users")
                .insertOne(matchDocument, function (err, result) {
                    if (err) {
                        res
                            .status(400)
                            .send("Error inserting matches!");
                    } else {
                        console.log(`Added a new match with id ${result.insertedId}`);
                        res
                            .status(204)
                            .send();
                    }
                }) */
        },
        login(req, res) {
            User
                .findOne({userid: req.body.userid}, function(err, user){
                    if(err) throw err
                    if(!user){
                        res.status(401).send({success: false, msg: '해당 ID가 존재하지 않습니다.'});
                    }else{
                        console.log(' ### 로그인 정보 : '+ JSON.stringify(user))
                        user.comparePassword(req.body.password, function(_err, isMatch){
                            console.log(' ### JWT 발급 전 : ')
                            if(!isMatch){
                                console.log(' ### 비밀번호가 틀렸습니다. ')
                                res.status(401).send({loginSuccess: false, msg: '비밀번호가 틀렸습니다.'});
                            }else{
                                console.log(' ### JWT 발급 직전 : ')
                                /**const token = jwt.sign(user.toJSON(), 'jwt-secret', {
                                    expiresIn: 604800 // 1 week
                                })
                                console.log(' ### JWT 발급 : '+ token)
                                res.json({success: true, token: 'JWT ' + token});*/
                                user.generateToken((err, user)=>{
                                    if(err) res.status(400).send(err)
                        
                                    // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
                                    res
                                    .status(200)
                                    .json({loginSuccess : true, token : user.token, user: user})
                                })
                            }
                        })
                    }
                })
             /**const matchDocument = {
                userid: req.body.userid,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                birth: req.body.birth,
                address: req.body.address
            };
            dbConnect
                .collection("users")
                .insertOne(matchDocument, function (err, result) {
                    if (err) {
                        res
                            .status(400)
                            .send("Error inserting matches!");
                    } else {
                        console.log(`Added a new match with id ${result.insertedId}`);
                        res
                            .status(204)
                            .send();
                    }
                }) */
        }
    } // return

    /** 
    return{
        join(req, res){
            console.log(' ### 진행 4 : 노드서버에 진입함'+JSON.stringify(req.body))
            new User(req.body).save(() => {
            res.status(200).json({'result':'ok'})
        })
        },
        getUsers(_req, res){
            User.find()
            .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).send({ success: true, users})
        })
        },
        profile(req, res){
            console.log(`### user profile access `)
            User.find({userid: req.params.id})
            .exec((err, user) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, user})
        })
        },
        login(req, res){
            console.log(`### user login access `)
            User.find({userid: req.params.id, password: req.params.password})
            .exec((err, user) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, user})
        })
        try {
            const id = 'test'
            const nick = 'test'
            // jwt.sign() 메소드: 토큰 발급 
            const token = jwt.sign({id, nick,}, process.env.JWT_SECRET, {
            expiresIn: '1m', //1분
            issuer: '토큰 발급자'
        });
        
        return res.json({
          code: 200,
          message: '토큰이 발급되었습니다.',
          token,
        });
        }catch (error) {
          console.error(error);
          return res.status(500).json({
            code: 500,
            message: '서버 에러',
          });
        }
        }
    }*/
}