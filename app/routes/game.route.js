const { write } = require('../controllers/board.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;