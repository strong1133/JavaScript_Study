const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.set("views", path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use("/public", express.static(__dirname + '/public'));

//body -> json

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router Setting
const router = require("./routes/index");
app.use(router);




mongoose.connect("mongodb://localhost:27017/node", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.error("mongoDB Connection Error!", err);
    }
    console.log("몽고DB 연결 성공!");
    
    // Server Open
    app.listen(3000, function(){
        console.log("지금 서버 포트는 " + port);
    });
});