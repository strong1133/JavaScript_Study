const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");

const port = 3000;

let users = [
    { id: 1, name: "정석진" },
    { id: 2, name: "정형진" },
    { id: 3, name: "홍슬기" },
];

app.use(morgan("dev")); // logger
app.use(router);

app.get("/", (req, res) => {
    res.json("Test Get");
});

app.get("/users", (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    let targetUser = users.filter((user) => user.id == id)[0];
    res.json(targetUser);
});

app.listen(port, () => {
    console.log("Express Is Run :: ", port);
});

module.exports = app;
