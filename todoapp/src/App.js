import React, { Component } from 'react';
import TodoList from './TodoList';
import Forms from './Forms';
import { appContext } from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Hello, world',
          done: false,
        },
      ],
    };
  }

  toggleTodoDone(id) {
    const todos = this.state.todos.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    });
    this.setState({todos: todos});
  }

  addTodo(text) {
    console.log('add');
    const newTodo = {
      id: Math.max(...this.state.todos.map(obj => obj.id)) + 1,
      text: text,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  clearTodo() {
    console.log('clear');
    const todos = this.state.todos.filter(t => t.done === false);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <appContext.Provider
        value={{
          state: this.state,
          actions: {
            toggleTodoDone: (id) => this.toggleTodoDone(id),
            addTodo: (text) => this.addTodo(text),
            clearTodo: () => this.clearTodo(),
          }
        }}
      >
        <div className="app">
          <h1>Todo App</h1>
          <Forms />
          <TodoList />
        </div>
      </appContext.Provider>
    );
  }
}

export default App;
