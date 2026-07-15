import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, [refresh]);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading tasks:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading tasks...</div>;

  return (
    <div className="task-list">
      <h2>My Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Create one above!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdated={loadTasks} />
        ))
      )}
    </div>
  );
};

export default TaskList;