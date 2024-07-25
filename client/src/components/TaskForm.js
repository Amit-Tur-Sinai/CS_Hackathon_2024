// src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/tasks', { title, description, category, location, urgency });
      fetchTasks();
      setTitle('');
      setDescription('');
      setCategory('');
      setLocation('');
      setUrgency('');
    } catch (error) {
      console.error('Failed to add task', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="security">Security</option>
        <option value="medical">Medical</option>
        <option value="food">Food</option>
        <option value="supplies">Supplies</option>
        <option value="repair">Repair</option>
        <option value="tech support">Tech Support</option>
        <option value="transportation">Transportation</option>
      </select>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <select
        value={urgency}
        onChange={(e) => setUrgency(e.target.value)}
        required
      >
        <option value="">Select Urgency</option>
        <option value="emergency">Emergency</option>
        <option value="urgent">Urgent</option>
        <option value="regular">Regular</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
