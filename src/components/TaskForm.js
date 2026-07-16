import React, { useState } from 'react';
import { createTask } from '../services/api';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ onTaskCreated }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'MEDIUM',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createTask(formData);

    setFormData({
      title: '',
      description: '',
      priority: 'MEDIUM',
      dueDate: ''
    });

   if (onTaskCreated) {
      onTaskCreated();
    }

    navigate("/tasks");

  } catch (error) {
    console.error("Error creating task:", error);
  }
};

 return (
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
    <h2 className="text-3xl font-bold text-white mb-6">
      Create New Task
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Title */}
      <div>
        <label className="block text-blue-100 font-medium mb-2">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter task title..."
          className="w-full rounded-xl border border-blue-300/30 bg-white/20 px-4 py-3 text-white placeholder-blue-200 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-blue-100 font-medium mb-2">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Write a short description..."
          className="w-full rounded-xl border border-blue-300/30 bg-white/20 px-4 py-3 text-white placeholder-blue-200 outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
        />
      </div>

      {/* Priority + Date */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-blue-100 font-medium mb-2">
            Priority
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-xl border border-blue-300/30 bg-white/20 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          >
            <option className="text-black" value="LOW">LOW</option>
            <option className="text-black" value="MEDIUM">MEDIUM</option>
            <option className="text-black" value="HIGH">HIGH</option>
            <option className="text-black" value="URGENT">URGENT</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-100 font-medium mb-2">
            Due Date
          </label>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-blue-300/30 bg-white/20 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-cyan-600 hover:scale-[1.02] active:scale-95"
      >
        + Create Task
      </button>

    </form>
  </div>
);
};

export default TaskForm;