import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const passTodos = (inputValue) => {
    setTodos([...todos, inputValue]);
    console.log(`new todos: ${todos}`);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <TodoForm passTodos={passTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
