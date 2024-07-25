// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ color: task.urgency === 'emergency' ? 'red' : task.urgency === 'urgent' ? 'orange' : 'green' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Category:</strong> {task.category}</p>
          <p><strong>Location:</strong> {task.location}</p>
          <p><strong>Urgency:</strong> {task.urgency}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
