import React from 'react';


export const List =(props)=>{
  // [{ _id: """,task": "Cycling1", "done": false },{ "task": "Cycling2", "done": false },{ "task": "Cycling3", "done": false }]

  return(
    <ul id="task-list">

    {props.tasks.map((task,index)=>
     <li key={task._id} className="task-item">
      <span> {task.task}</span>
      <div>
        <button  onClick={()=>props.changeStatus(task._id,!task.done,task.task)}>{task.done?'Undo':'Done'}</button>
        <button onClick={()=> props.deleteTask(task._id)}>Delete</button>
      </div>
     </li>
    )}


    </ul>
  )
}