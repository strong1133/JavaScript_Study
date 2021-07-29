
// Todo Schema
const mongoose = require('mongoose');
const testDBSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
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

testDBSchema.plugin(autoIn)

module.exports = mongoose.model('TestDB', testDBSchema);