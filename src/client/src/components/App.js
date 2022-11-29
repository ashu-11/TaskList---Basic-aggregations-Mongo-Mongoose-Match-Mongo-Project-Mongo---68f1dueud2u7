
import React, { useEffect, useState } from "react";
import {List}  from "./List/List";
import  {getTasks,addTask,editTask,deleteTask} from "../utils/api"

const App = () => {
  const [tasks,setTasks]=useState([]);
  const [currentTask,setCurrentTask]=useState('');
  // it will render for the first time when youe application laod for the first time
  useEffect(()=>{
    getTasks(setTasks)
  },[])

  const addTaskitem =async()=>{
    await addTask(currentTask);
    await getTasks(setTasks);
  }

  const onInputChange =(e)=>{
    setCurrentTask(e.target.value)
  }

  const chnageStatus = async(id,done,task)=>{
    await editTask(id,done,task);
     await getTasks(setTasks);

  }

  const deleteTask1 =async(id)=>{
    await deleteTask(id);
    await getTasks(setTasks);
  }
  return (
    <div id="main">
      <form onSubmit={(e)=>{e.preventDefault(); addTaskitem() }}>
        <input id ="text-box" type="text" value={currentTask} onChange={onInputChange}/>
        <button type="submit">+</button>
      </form>
    <List tasks={tasks}  chnageStatus ={chnageStatus} deleteTask={deleteTask1}/>
    </div>
  )
}

export default App;
