const { addTodo,getTodo } = require('../controllers/todo.controller');
module.exports = x => {x.app.post(`${x.url}/addTodo`, addTodo)
                       x.app.get(`${x.url}/getTodo`, getTodo)} ;