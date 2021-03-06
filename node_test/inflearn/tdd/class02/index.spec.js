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
    describe("실패시", () => {
        it("id가 숫자가 아니면 400을 응답한다.", (done) => {
            request(app).get("/users/one").expect(400).end(done);
        });
        it("id에 해당 하는 유저가 없으면 404를 응답한다.", (done) => {
            request(app).get("/users/999").expect(404).end(done);
        });
    });
});

describe("DELETE /users/1 는", () => {
    describe("성공시", () => {
        it("id가 1인 user를 삭제한다.", (done) => {
            request(app).delete("/users/1").expect(204).end(done);
        });
    });
    describe("실패시", () => {
        it("id가 숫자가 아니면 400을 응답한다.", (done) => {
            request(app).delete("/users/one").expect(400).end(done);
        });
    });
});

describe("POST /users", () => {

    describe("성공시", () => {
        let body;
        before(done => {
            request(app)
                .post("/users")
                .send({ name: "정석무" })
                .expect(201)
                .end((err, res) => {
                    body = res.body;
                });
        });
        it("생성된 유저 객체를 반환한다", (done) => {
            body.should.have.property('id');
        });
        it("입력한 name을 반환한다.", (done) => {
            body.should.have.property('name');
        });
    });
    describe("실패시", () => {
        it("name 누락시 400을 응답한다.", (done) => {
            request(app).post("/users").send({name:''}).expect(400).end(done);
        });
        it("name 중복시 409을 응답한다.", (done) => {
            request(app).post("/users").send({name:'정석진'}).expect(409).end(done);
        });
    });
});
