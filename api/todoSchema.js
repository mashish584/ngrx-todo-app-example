const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let todoSchema = new mongoose.Schema({
  task: String,
  complete: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("TODO", todoSchema);
