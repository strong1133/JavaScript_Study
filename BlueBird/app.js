const express = require("express");
const path = require("path");

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

const blue = require("./route/blue")



app.use('/blue', blue)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(res.send("찾을 수 없습니다."));
  });
  
  app.listen(port, () =>
    console.log(`지금 서버 포트는 ${port}`)
  );
  

module.exports = app;
  
