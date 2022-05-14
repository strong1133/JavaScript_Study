const request = require("supertest");
const should = require("should");

const app = require("./app");

describe("GET /user 는", () => {
    describe("성공시", () => {
        it("유저 객체를 담은 배열을 응답한다.", (done) => {
            request(app)
                .get("/users")
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array); // res.body의 타입이 Array인지 검증.
                    done();
                });
        });

        it("최대 limit 만큼 응답한다.", (done) => {
            request(app)
                .get("/users?limit=2")
                .end((err, res) => {
                    res.body.should.have.lengthOf(2);
                    done();
                });
        });
    });

    describe("실패시", () => {
        it("limit이 숫자가 아니면 400을 응답한다.", (done) => {
            request(app)
                .get("/users?limit=two")
                .expect(400)
                .end((err, res) => {
                    done();
                });
        });
    });
});

describe("GET /users/1 는", () => {
    describe("성공시", () => {
        it("id가 1인 user를 반환한다.", (done) => {
            request(app)
                .get("/users/1")
                .end((err, res) => {
                    res.body.should.have.property("id", 1);
                    done();
                });
        });
    }); 
    describe("실패시", ()=>{
        it("id가 숫자가 아니면 400을 응답한다.", (done)=>{
            request(app)
                .get('/users/one')
                .expect(400)
                .end((err, res)=>{
                    done();
                })
        })
    })
});
