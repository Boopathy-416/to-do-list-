import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    const newTask = { name: taskName, completed: false, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(newTasks);
  };

  const editTask = (e, index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: e.target.value } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <Header />
      <TodoForm addTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        startEditing={startEditing}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
