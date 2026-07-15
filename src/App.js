import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>📝 Task Manager</h1>
         
      
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList refresh={refresh} />
  

      
    </div>
  );
}

export default App;