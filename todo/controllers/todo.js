
const todoService = require('../service/todo')

exports.getTodo = function(req, res){
    console.log("====controller====");
    todoService.getTodo();
    let j = JSON.stringify({ [Symbol('foo')]: 'foo' });
    res.json(j.foo);
};