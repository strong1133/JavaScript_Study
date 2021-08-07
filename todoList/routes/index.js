const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('라우터 진입 성공!')
});


module.exports = router;
