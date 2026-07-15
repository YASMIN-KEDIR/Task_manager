import React from 'react';
import { completeTask, deleteTask } from '../services/api';

const TaskItem = ({ task, onTaskUpdated }) => {
  const handleComplete = async () => {
    try {
      await completeTask(task.id);
      onTaskUpdated();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Delete this task?')) {
      try {
        await deleteTask(task.id);
        onTaskUpdated();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'URGENT': return 'red';
      case 'HIGH': return 'orange';
      case 'MEDIUM': return 'blue';
      case 'LOW': return 'green';
      default: return 'black';
    }
  };

  return (
    <div className={`task-item ${task.status === 'COMPLETED' ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: <strong>{task.status}</strong></p>
      <p>Priority: <strong style={{ color: getPriorityColor(task.priority) }}>{task.priority}</strong></p>
      <p>Due: {task.dueDate || 'No due date'}</p>
      <p>Created: {new Date(task.createdAt).toLocaleDateString()}</p>
      
      {task.status !== 'COMPLETED' && (
        <button className="complete-btn" onClick={handleComplete}>
          ✅ Complete
        </button>
      )}
      <button className="delete-btn" onClick={handleDelete}>
        🗑️ Delete
      </button>
    </div>
  );
};

export default TaskItem;