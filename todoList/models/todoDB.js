const mongoose = require('mongoose');

const todoDBSchema = new mongoose.Schema({

    created:{
        type:Date,
        default:Date.now
    },
    content:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},
{versionKey: false})
module.exports = mongoose.model('TodoDB', todoDBSchema);