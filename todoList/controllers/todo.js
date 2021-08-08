const { json } = require('express');
const respDto = require('../utils/responseDto');
const todoService = require('../services/todo');

//get Hello
const getHello = async function(req, res){
    console.log('=== getHello ===')
    let data = {
        data:"Hello"
    }
    respDto.responseDto(res, 200, data);
}

//get Todo
const getTodo = async (req, res)=>{
    console.log('=== getTodo ===')
    try{
        let todos = await todoService.getTodo();
        respDto.responseDto(res,200,todos);
    }catch(error){
        respDto.errorResponseDto(res, 500, error);
    }
}

//post Todo
const writeTodo = async(req, res)=>{
    console.log('=== postTodo ===')
    try{
        let todos = await todoService.writeTodo(req.body);
        respDto.responseDto(res, 200, todos)
    }catch(error){
        respDto.errorResponseDto(res, 400, error);
    }
}


module.exports = {
    "getHello":getHello,
    "getTodo":getTodo,
    "writeTodo":writeTodo
}

