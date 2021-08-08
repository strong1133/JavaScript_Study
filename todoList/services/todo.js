const TodoDB = require('../models/todoDB');

//get Todo
const getTodo = async (req, res, err) =>{
    if(err){
        console.log("==== 조회 실패 ====");
        throw new Error("조회 실패");
    }
    let todos = await TodoDB.find(); 
    return todos;
}

//post Todo
const writeTodo = async (req, res, err)=>{
    if(err){
        console.log("==== 작성 실패 ====");
        throw new Error("작성 실패");
    }
    const todo = new TodoDB({
        content: req.content
    });
    return todo.save();
}

//put Todo
const updateTodo = async (id, data, req, err) =>{
    if(err){
        console.log("==== 수정 실패 ====");
        throw new Error("수정 실패");
    }
    if (data === null){
        throw new Error("수정 실패");
    }
    await TodoDB.findByIdAndUpdate(id, {content: data});
}


module.exports={
    "getTodo":getTodo,
    "writeTodo":writeTodo,
    "updateTodo":updateTodo,
}