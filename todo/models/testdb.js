
// Todo Schema
const mongoose = require('mongoose');
const testDBSchema = new mongoose.Schema({
  
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
},
{versionKey: false }
);


module.exports = mongoose.model('TestDB', testDBSchema);