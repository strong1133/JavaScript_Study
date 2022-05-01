const express = require('express');
const app = express();

const logger = (req, res, next) =>{
    console.log("LOG :: ");
    next();
}

app.use(logger);

app.listen(3000, ()=>{
    console.log('Express Is Run');
})