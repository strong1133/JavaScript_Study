var express = require("express");
var router = express.Router();
const { getCallbackBranch } = require("../response/responceDto");



router.get("/", function (req, res, next) {
    

    let resJson= {
        key:"name",
        value:"정석진"
    }
    getCallbackBranch(null, resJson, res)
});



module.exports = router;
