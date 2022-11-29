const express = require('express');
const cors = require('cors');
const router = require('express').Router();
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(express.json());

const { connector } = require("./connector");

//Add task to database 
router.route('/tasks').post((req,res)=>{
  const task= req.body.task;
  const done = req.body.done;

  const newTask  = new connector({
    task,done
  });

  newTask.save().then(()=>res.json(newTask))
  .catch(err=> res.status(400).json(err))

})









app.use('/',router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

exports.app;
