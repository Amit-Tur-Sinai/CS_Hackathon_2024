import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskListView = () => {
  const [tasks, setTasks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tasks', {
        params: { category: categoryFilter },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  }, [categoryFilter]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <h2>Task List</h2>
      <TaskForm fetchTasks={fetchTasks} />
      <label>
        Filter by Category:
        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="">All</option>
          <option value="security">Security</option>
          <option value="medical">Medical</option>
          <option value="food">Food</option>
          <option value="supplies">Supplies</option>
          <option value="repair">Repair</option>
          <option value="tech support">Tech Support</option>
          <option value="transportation">Transportation</option>
        </select>
      </label>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskListView;
