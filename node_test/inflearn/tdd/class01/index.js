// http 모듈로 서버 만들기

const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        req.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("Hello World\n");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/plain");
        res.end("No Such Page");
    }
});

server.listen(port, hostName, () => {
    console.log(`서버 구동 완료 // 포트는 = ${port}`);
});
