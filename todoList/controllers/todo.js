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
        respDto.responseDto(res, 200, todos);
    }catch(error){
        respDto.errorResponseDto(res, 400, error.message);
    }
}

//update Todo
const updateTodo = async(req, res)=>{
    try{
        let id = req.params.todoid
        if (req.body.content === undefined){
            throw new Error
        }
        
        let data = req.body.content;
        let todos = await todoService.updateTodo(id, data);
        
        respDto.responseDto(res, 200, todos);
    }catch(error){
        respDto.errorResponseDto(res, 500, error.message);
    }
}

// delete Todo
const deleteTodo = async(req, res)=>{
    try{
        let id = req.params.todoid
        await todoService.deleteTodo(id);
        respDto.responseDto(res, 200, "삭제완료");
    }catch(error){
        respDto.errorResponseDto(res, 500, error.message);
    }
}

module.exports = {
    "getHello":getHello,
    "getTodo":getTodo,
    "writeTodo":writeTodo,
    "updateTodo":updateTodo,
    "deleteTodo":deleteTodo
}

