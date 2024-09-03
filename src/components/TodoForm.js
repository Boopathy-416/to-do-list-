import React, { useState } from 'react';



function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group  my-3">
      <input

        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mx-2 border-3">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
