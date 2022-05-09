const request = require("supertest");
const should = require("should");

const app = require("./app");

describe("GET /user", () => {
    it("res with JSON", (done) => {
        request(app)
        .get('/users')
        .end((err,res)=>{
            console.log(res.body);
            done();
        });
    });
});
