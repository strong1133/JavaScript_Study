const express = require('express')
const app = express()
const router = express.Router();

const TodoRouter = require('./todo');

router.get('/', (req, res) =>{
    res.send('라우터 진입 성공!')
});

router.use('/todo', [TodoRouter]);

module.exports = router;
