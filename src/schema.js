const { Schema } = require('mongoose');

const taskSchema = new Schema({
  task: Schema.Types.String,
  done: Schema.Types.Boolean
})

exports.taskSchema = taskSchema;
