import React from 'react';

const TaskItem = ({ task, toggleTask, removeTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleTask(task.id)}>Toggle</button>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
