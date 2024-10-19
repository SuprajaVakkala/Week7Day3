import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const TaskApp = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskApp;
