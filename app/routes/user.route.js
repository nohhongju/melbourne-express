const {signup, userlist} = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/signup`, signup)
                       x.app.get(`${x.url}/list`, userlist)
                      }