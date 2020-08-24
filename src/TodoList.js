import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  const listItems = todos.map((todo) => {
    return(
      <React.Fragment>
        <ul>
          <TodoItem todo={todo} />
        </ul>
      </React.Fragment>
    )
  });

  return(
    <ul>{listItems}</ul>
  )
}

export default TodoList;
