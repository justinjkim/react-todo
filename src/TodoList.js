import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const listItems = todos.map((todo) => {
    return(
      <li>{todo}</li>
    )
  });

  return(
    <ul>{listItems}</ul>
  )
}

export default TodoList;
