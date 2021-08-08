const express = require('express');
const  mongoose  = require('mongoose');
const path = require('path');


const app = express();
const port = 3000;

// View Setting
app.set("views", path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/public', express.static(__dirname + '/public'));

// JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// Router Setting
const router = require("./routes/index");
app.use(router);

// DataBase Connect
mongoose.connect("mongodb://localhost:27017/node", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("데이터베이스 연결 오류");
    }
    console.log("데이터베이스 연결 성공");

    //Server Run
    app.listen(port, function(){
        console.log("지금 서버는 포트는"+port)
    })
})