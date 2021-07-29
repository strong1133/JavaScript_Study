const express = require("express");
const app = express();
const router = express.Router();

// Controller 를 불러와서 exports 메소드 사용
const controller = require("../controllers/todo");

// Main
router.get('/', controller.getTodo); 
router.get('/hello', controller.getHello); 

router.post('/',controller.writeTodo);

module.exports = router;