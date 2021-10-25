const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = Schema({
  name: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task = mongoose.model("task", schema);
