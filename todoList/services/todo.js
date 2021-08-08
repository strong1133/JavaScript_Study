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
const updateTodo =  (id, data, req, err) =>{
    TodoDB.findOne({_id:id});
    if (data === null){
        throw new Error("수정 실패");
    }
    return TodoDB.findByIdAndUpdate(id, {content: data});
}

//delete Todo
const deleteTodo =  (id) =>{
    console.log(id)
    return TodoDB.deleteOne({_id:id});
}


module.exports={
    "getTodo":getTodo,
    "writeTodo":writeTodo,
    "updateTodo":updateTodo,
    "deleteTodo":deleteTodo
}