import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["eat", "more", "veggies"]);

  const passTodos = (inputValue) => {
    setTodos([...todos, inputValue]);
    console.log(`new todos: ${todos}`);
  }

  return (
    <div className="App">
      <TodoForm passTodos={passTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
