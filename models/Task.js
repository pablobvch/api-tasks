const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  status: Boolean
});

module.exports = mongoose.model("Task", schema);
