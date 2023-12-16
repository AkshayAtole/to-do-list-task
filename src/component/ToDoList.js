import React from 'react'
import './ToDoList.css'
    
const ToDoList = ({ tasks,completeTask, deleteTask }) => {
  return (
    <div className='main'>
  <ul >
    {
    tasks.map((task) => (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => completeTask(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <button onClick={() => deleteTask(task.id)} >Delete</button>
      </li>
    ))}

      
     

   
  </ul>

    </div>
    
  
  )
}

export default ToDoList