import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Todo from './components/TodoCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
