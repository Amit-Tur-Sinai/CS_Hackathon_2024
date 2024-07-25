// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import TaskListView from './views/TaskListView';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to the Task Manager</div>} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={token ? <TaskListView /> : <div>Please log in to view tasks.</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
