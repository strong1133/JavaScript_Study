// All Routers Exports
const express = require("express");
const app = express();
const router = express.Router();

const viewController = require("../controllers/home");
const TodoRouter = require('./todo');

// view Controller
router.get('/', viewController.main);

// todo Controller
router.use('/todo', [TodoRouter]); 


module.exports = router;