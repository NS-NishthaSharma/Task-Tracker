// Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{ background: task.completed ? '#e6e6e6' : '#f0f8ff', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <input type="checkbox" onChange={() => onToggle(task.id)} checked={task.completed} />
      <span style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button style={{ marginLeft: '10px', backgroundColor: '#ff6347', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;

