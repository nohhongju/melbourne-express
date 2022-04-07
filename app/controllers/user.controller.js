const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
}