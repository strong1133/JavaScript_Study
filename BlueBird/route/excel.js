var express = require("express");
var router = express.Router();
const { getCallbackBranch } = require("../response/responceDto");


const excel = require("../services/excel")

router.get("/", async (req, res, next) => {
    console.log("EXCEL TEST")

    excel.excelGen(req, res)

    // getCallbackBranch(null, resJson, res);
});

module.exports = router;
