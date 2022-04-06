const {getbmi} = require('../controllers/basic.controller');
const {getcalc} = require('../controllers/basic.controller');
module.exports = x => x.app.post(`${x.url}/bmi`, getbmi);
module.exports = x => x.app.post(`${x.url}/calc`, getcalc);