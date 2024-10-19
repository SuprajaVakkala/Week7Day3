import { createStore } from 'redux';
import taskReducer from './reducers/taskReducer';
import { useTasks } from '../hooks/useTasks';
import React, { createContext } from 'react';

const store = createStore(taskReducer);

// TaskContext using hooks
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const taskData = useTasks();

  return (
    <TaskContext.Provider value={taskData}>
      {children}
    </TaskContext.Provider>
  );
};

export default store;
