
const todoService = require('../service/todo')

const ob ={
    name:"asd",
    age:20,
    desc:"fff"
};

exports.getTodo = function(req, res){
    console.log("====controller====");
    todoService.getTodo();
    res.json(ob);
};