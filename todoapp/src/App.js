import React, {Component} from 'react';
import TodoList from './TodoList';
import Forms from './Forms';

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

  addTodo(text) {
    const newTodo = {
      id: Math.max(...this.state.todos.map(obj => obj.id)) + 1,
      text: text,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  reloadTodo() {
    // TODO: TOdo.jsで保持しているのは別の値なので，clickによる状態変化はここで検知できない -> contextの話に持って行く
  }

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <Forms addTodo={(e) => this.addTodo(e)} reloadTodo={(e) => this.reloadTodo(e)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
