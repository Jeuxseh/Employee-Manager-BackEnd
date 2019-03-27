const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskDescription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  initialTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type:  Number,
    required: true,
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;