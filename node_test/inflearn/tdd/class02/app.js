const express = require('express');
const app = express();
const router = express.Router();
const morgan = require("morgan");

const port = 3000;

let users = [
    {id:1,name:"정석진"},
    {id:2,name:"정형진"},
    {id:3,name:"홍슬기"}
];

app.use(morgan('dev')); // logger 
app.use(router);


router.get("/", (req, res)=>{
    res.json("Test Get");
});

router.get("/users", (req, res)=>{
    res.json(users);
})

app.listen(port, ()=>{
    console.log('Express Is Run :: ', port);
})