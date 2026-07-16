import React from 'react';
import { completeTask, deleteTask, startTask } from '../services/api';

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

 const getProgress = (status) => {
  switch (status) {
    case "IN_PROGRESS":
      return 50;

    case "COMPLETED":
      return 100;

    case "PENDING":
      return 0;

    default:
      return 0;
  }
};

const handleStart = async () => {
  try {
    await startTask(task.id);
    onTaskUpdated();
  } catch(error) {
    console.error("Error starting task:", error);
  }
};



  return (
  <div
    className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      task.status === "COMPLETED" ? "opacity-70" : ""
    }`}
  >

    {/* Title and Priority */}
    <div className="flex justify-between items-start gap-4">

      <h3 className="text-2xl font-bold text-white">
        {task.title}
      </h3>

      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          task.priority === "URGENT"
            ? "bg-red-500 text-white"
            : task.priority === "HIGH"
            ? "bg-orange-500 text-white"
            : task.priority === "MEDIUM"
            ? "bg-blue-500 text-white"
            : "bg-green-500 text-white"
        }`}
      >
        {task.priority}
      </span>

    </div>


    {/* Description */}
    <p className="text-blue-100 mt-4">
      {task.description}
    </p>


    {/* Status */}
    <div className="mt-4">

      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          task.status === "COMPLETED"
            ? "bg-green-500/20 text-green-300"
            : task.status === "IN_PROGRESS"
            ? "bg-blue-500/20 text-blue-300"
            : "bg-yellow-500/20 text-yellow-300"
        }`}
      >
        {task.status}
      </span>

    </div>


    {/* Progress Bar */}
    <div className="mt-5">

      <div className="flex justify-between text-sm text-blue-200 mb-2">
        <span>Progress</span>
        <span>{getProgress(task.status)}%</span>
      </div>


      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">

        <div
          className={`h-3 rounded-full transition-all duration-700 ${
            task.status === "COMPLETED"
              ? "bg-green-500"
              : task.status === "IN_PROGRESS"
              ? "bg-blue-500"
              : "bg-gray-400"
          }`}
          style={{
            width: `${getProgress(task.status)}%`
          }}
        ></div>

      </div>

    </div>


    {/* Dates */}
    <div className="mt-5 space-y-2 text-sm text-blue-200">

      <p>
        📅 Due:
        <span className="text-white ml-2">
          {task.dueDate || "No due date"}
        </span>
      </p>


      <p>
        🕒 Created:
        <span className="text-white ml-2">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </p>

    </div>


    {/* Buttons */}
    <div className="flex gap-4 mt-6">

  {task.status === "PENDING" && (
    <button
      onClick={handleStart}
      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
    >
      ▶ Start Task
    </button>
  )}


  {task.status === "IN_PROGRESS" && (
    <button
      onClick={handleComplete}
      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition"
    >
      ✅ Finish Task
    </button>
  )}


      <button
    onClick={handleDelete}
    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
  >
    🗑 Delete
  </button>

    </div>

  </div>
);
};

export default TaskItem;