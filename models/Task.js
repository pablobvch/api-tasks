const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  status: String
});

module.exports = mongoose.model("Task", schema);
