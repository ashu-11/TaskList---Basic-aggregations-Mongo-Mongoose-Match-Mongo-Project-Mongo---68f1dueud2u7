const mongodb = require('mongodb');
const mongoose = require('mongoose');
let {taskSchema} = require('./schema');

const uri = "mongodb://localhost:27017/task"; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true })

let collection_connection = mongoose.model('task', taskSchema);
exports.connector = collection_connection;
