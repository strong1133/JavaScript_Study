// All Routers Exports
const express = require("express");
const app = express();
const router = express.Router();

const viewController = require("../controllers/home");
const TodoRouter = require('./todo');

// view Controller
// router.use('/', viewController.main);
router.get('/', function(req,res){
    res.render("index");
})

router.use('/todo', TodoRouter); 


module.exports = router;