const URL='/tasks/';
// get all the 
export const getTasks = async(setTasks)=>{

  await fetch(URL,{
    method:'GET',
    headers:{'Content-Type':'application/json'},
  }).then(response=>response.json())
  .then((data)=>{
    setTasks(data);
    console.log(data);
  });
}


export const addTask =async(currentTask)=>{

   await fetch(URL,{
    method:'POST',
    body:JSON.stringify({
      task:currentTask,
      done:false
    }),
    headers:{'Content-Type':'application/json'},
  }).then(response=>response.json())
  .catch(e=>console.log(e))
  
}


export const editTask = async(id,done,task)=>{

  await fetch(URL+String(id),{
     method:'PUT',
    body:JSON.stringify({
      task:task,
      done:done
    }),
    headers:{'Content-Type':'application/json'},
  }).then(response=>response.json())
  .catch(e=>console.log(e))
}


export  const deleteTask =async(id)=>{
    await fetch(URL+String(id),{
     method:'DELETE',
    headers:{'Content-Type':'application/json'},
  }).then(response=>response.json())
  .catch(e=>console.log(e))

}