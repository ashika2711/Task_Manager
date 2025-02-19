// src/components/TaskForm.js

import { useState } from 'react';
import axios from 'axios';  // Import Axios

function TaskForm({ section }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    try {
      const newTask = {
        title: task,
        description: description,
        status: section,  // Pass the section as status
      };
  
      // Make the POST request to your backend API
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
  
      // Update the state optimistically
      setTask(prevTasks => [...prevTasks, response.data]);  // Assuming the new task is in the response
  
      alert(`Task "${task}" added to ${section}`);
      setTask("");  // Clear input after submitting
      setDescription("");  // Clear description input
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    }
  };
  

  return (
    <div className="m-6 p-6 bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
      {/* Form Header */}
      <h3 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
        Add Task to <span className="text-green-600">{section}</span>
      </h3>
  
      {/* Task Input Fields */}
      <div className="space-y-4">
        {/* Task Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">Task Name</label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder={`Enter task for ${section}`}
          />
        </div>
  
        {/* Task Description */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            Task Description
          </label>
          <textarea
            className="w-full border-2 border-gray-300 rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={`Enter description for ${section}`}
          />
        </div>
      </div>
  
      {/* Action Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all transform hover:-translate-y-1"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
  
}

export default TaskForm;