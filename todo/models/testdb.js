const mongoose = require("mongoose");
const testdbSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('testdb', testdbSchema);