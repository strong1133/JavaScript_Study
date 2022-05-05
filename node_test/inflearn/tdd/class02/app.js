const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();

const logger = (req, res, next) =>{
    console.log("LOG :: ");
    next();
}

app.use(logger);
app.use(router);


router.get("/", (req, res)=>{
    res.json("Test Get")
})

app.listen(port, ()=>{
    console.log('Express Is Run :: ', port);
})