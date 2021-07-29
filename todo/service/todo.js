
const TestDB = require("../models/testdb")

// KST Setting
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");


const getHello = async (req, res) =>{
    let data = {
        msg:"Hello Node"
    }
    return data;
}

//get
const getTodo = async (req, res) =>{
    try{
        testdbs = await TestDB.find();
        // console.log(testdbs)
        return testdbs;
    }catch(error){
        console.error("==== !조회 실패! ====");
        throw Error(error)
    }
}

//post
const writeTodo = async function(req, res){
    try{
        const todo =  new TestDB({
            content: req.content,
            date: moment().format("YYYY-MM-DD HH:mm:ss")
        });
        return todo.save();
        console.log("==== Success!! Save New TodoTask ====");
        console.table([{id: todo._id, content: todo.content, date: todo.date}]);

    }catch(error){
        console.log("==== !생성 실패! ====");
        
    }
}

const updateTodo = async function(req, res){
    const id = req.params.id;
    TestDB.findByIdAndUpdate(id, { content: req.body.content }, err => {
        if(err){
            console.log("==== !수정 실패! ====");
        }
        console.log("==== Success!! Update TodoTask ====");
        console.log("id: " + id + "\nchanged content: " + req.body.content);
        return {msg:"수정 완료"};
    });
}


module.exports = {
    "getTodo": getTodo,
    "writeTodo": writeTodo,
    "getHello":getHello,
}