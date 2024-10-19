import { useReducer } from 'react';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export const useTasks = (initialTasks = []) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: task });
  const removeTask = (id) => dispatch({ type: 'REMOVE_TASK', payload: id });
  const toggleTask = (id) => dispatch({ type: 'TOGGLE_TASK', payload: id });

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
  };
};
