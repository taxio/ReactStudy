import React from 'react';
import Todo from './Todo';
import { appContext } from './Store';

const TodoList = () => (
  <appContext.Consumer>
    {({ state, actions }) => (
      <ul>
        {state.todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    )}
  </appContext.Consumer>
);

export default TodoList;
