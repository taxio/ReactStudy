import React, {Component} from 'react';
import TodoList from './TodoList';

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
        {
          id: 2,
          text: 'hogehoeg',
          done: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
