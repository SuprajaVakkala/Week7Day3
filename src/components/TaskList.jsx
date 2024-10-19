import React, { useContext } from 'react';
import { TaskContext } from '../redux/store';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
