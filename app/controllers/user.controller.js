const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema(req.body).save(() => {
        res.status(200).json({'result':'ok'})
    })
}
exports.userlist = (req, res) => {
    console.log(`### userController access !!!`)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).send({ success: true, users})
    })
}