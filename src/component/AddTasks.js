import React, { useState } from 'react'

const AddTasks = ({ addTask }) => {
  
    const [taskTitle, setTaskTitle] = useState('');
  
    const handleAddTask = () => {
      if (taskTitle !== '') {
        addTask(taskTitle);
        setTaskTitle('');
        alert("task added Successfully")
      }
    };
  
  return (
    <div style={{textAlign:"center"}}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask} style={{backgroundColor:"green"}}>Add</button>
    </div>
  )
}

export default AddTasks