const {signup} = require('../controllers/user.controller');

module.exports = x => x.app.post(`${x.url}/signup`,signup);