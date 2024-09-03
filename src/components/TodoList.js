import React from 'react';


function TodoList({ tasks, toggleTask, deleteTask, startEditing, editTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`list-group-item d-flex justify-content-between align-items-center task-item ${task.completed ? 'task-completed' : 'task-incomplete'}`}
          data-bs-toggle="tooltip" 
          data-bs-placement="top" 
          title={task.completed ? '' : "If you completed the task, please tick the checkbox."} 
        >
          
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="me-2"
            />
            {task.isEditing ? (
              <input
                type="text"
                value={task.name}
                onChange={(e) => editTask(e, index)}
                className="form-control"
                style={{ display: 'inline-block', width: 'auto' }}
              />
            ) : (
              <span>
                {task.name}
              </span>
            )}
          </div>
          <div>
            {task.isEditing ? (
              <button onClick={() => startEditing(index)} className="btn btn-success btn-sm mx-2 me-2">
                Save
              </button>
            ) : (
              <button onClick={() => startEditing(index)} className="btn btn-primary mx-2 btn-sm me-2">
                Edit
              </button>
            )}
            <button onClick={() => deleteTask(index)} className="btn btn-danger mx-1 btn-sm">
              Delete
            </button>
          </div>
        </li>
      ))}
      <script>
       
      </script>
    </ul>
  );
}

export default TodoList;