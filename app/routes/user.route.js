const {signup, userlist, login} = require('../controllers/user.controller');
module.exports = x => {
    console.log('')
    x.app.post(`${x.url}/signup`, signup)
    x.app.post(`${x.url}/login`,verifyToken, login)
    x.app.get(`${x.url}/list`, userlist)
}