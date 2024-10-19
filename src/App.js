import React from 'react';
import { TaskProvider } from './redux/store';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <TaskProvider>
      <TaskApp />
    </TaskProvider>
  );
}

export default App;
