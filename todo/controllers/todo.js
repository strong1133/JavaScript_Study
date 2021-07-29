
const { json } = require('body-parser');
const todoService = require('../service/todo')
const respDto = require('../utils/responseDto') 

// Hello
const getHello = async function(req, res){
    console.log("====getHello====");
    let data = await todoService.getHello();
    // console.log(date)
    respDto.responseDto(res, 200, data)
};

// todos 전체 조회
const getTodo = async function(req, res){
    console.log("====getTodo====");
    let todos = await todoService.getTodo()
    // console.log(todos)
    respDto.responseDto(res, 200, todos)
};

// todos 작성
const writeTodo = async function(req, res){
    console.log("====writeTodo====");
    let todos = await todoService.writeTodo(req.body)
    // console.log(todos)
    respDto.responseDto(res, 200, todos)
};




module.exports = {
    "getTodo":getTodo,
    "getHello": getHello,
    "writeTodo":writeTodo,
}