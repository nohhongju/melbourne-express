const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema({
        username: req.body.username, 
        password: req.body.password, 
        name: req.body.name, 
        telephone: req.body.telephone
    }).save(() => {
        res.status(200).json({'result':'ok'})
    })
}