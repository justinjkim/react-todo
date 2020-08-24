import React, { useState } from 'react';

const TodoForm = ({ passTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    passTodos(inputValue);
    setInputValue("");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo:"
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit">Enter Todo</button>
    </form>
  )
}

export default TodoForm;
