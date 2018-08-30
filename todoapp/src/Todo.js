import React from 'react';
import { appContext } from './Store';

const Todo = ({todo}) => (
  <appContext.Consumer>
    {({ actions }) => (
      <li
        onClick={() => actions.toggleTodoDone(todo.id)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        <p>
          {todo.id}: {todo.text}
        </p>
      </li>
    )}
  </appContext.Consumer>
);

export default Todo;
