import React, { useState, useEffect } from 'react';

import AddTasks from './component/AddTasks';
import ToDoList from './component/ToDoList';



const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (taskTitle) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: taskTitle,
          completed: false,
        }),
      });
      const newTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const completeTask = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);

      await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !tasks.find((task) => task.id === taskId).completed }),
      });
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        method: 'DELETE',
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      alert("task deleted Successfully")
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div >
      <h1 style={{textAlign:"center",color:"tomato"}}>ToDo-List-App</h1>
     
      <AddTasks addTask={addTask} /> 
     <ToDoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}/>
     
      
      
     

    </div>
  );
};

export default App;
