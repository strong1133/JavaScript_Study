const express = require('express');
const app = express();
const router = express.Router();

const controller = require('../controllers/todo');

//hello
router.get('/hello', controller.getHello);

//getTodo
router.get('/', controller.getTodo);

//postTodo
router.post('/', controller.writeTodo);



module.exports = router;