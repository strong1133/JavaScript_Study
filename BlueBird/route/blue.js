var express = require("express");
var router = express.Router();
const { getCallbackBranch } = require("../response/responceDto");
const PROMISE = require("bluebird");
const ret = require("bluebird/js/release/util");

router.get("/blue", async (req, res, next) => {
    let resJson = {
        key: "list",
        value: "정석진",
    };

    let result = await pandingFunction();
    console.log("@@@@@@@");
    console.log(result);

    resJson.value = result;
    console.log(result)

    getCallbackBranch(null, resJson, res);
});

router.get("/await", async (req, res, next) => {
    let resJson = {
        key: "list",
        value: "정석진",
    };

    let result = await pandingAwaitFunction();
    console.log("@@@@@@@");
    console.log(result);

    resJson.value = result;
    console.log(result)

    getCallbackBranch(null, resJson, res);
});

const pandingAwaitFunction = async () => {
    let a = await makeA();
    let b = await makeB();
    let c = await makeA();
    let d = await makeA();

    let res =[];
    res.push(a,b,c,d)
    return res
};

const pandingFunction = async () => {
    let a = makeA();
    let b = makeB();
    let c = makeA();
    let d = makeA();

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

   let res= await PROMISE.all([a.then(), b.then(), c.then(), d.then()]).then((result) => {
        // console.log(result);
        return result;
    });
    return res
};

const makeA = async () => {
    let a = 1;
    await sleep(1000);

    return a;
};

const makeB = async () => {
    let a = 2;
    // for(let i=0; i<=10000; i++){
    //     for(let j=0; j <= 100000; j++){
    //         let b = i+j

    //     }
    //     a.push(i)
    // }
    await sleep(5000);

    return a;
};

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
module.exports = router;
