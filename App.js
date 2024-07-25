import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  const [tasks, setTasks] = useState([]);


  return (
    <div>
      <LoginForm/>
    </div>
  );
}

export default App;
