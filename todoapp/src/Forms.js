import React, { Component } from 'react';
import { appContext } from './Store';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  add() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <appContext.Consumer>
        {({ actions }) => (
          <div>
            <input type="text" onChange={(e) => this.setState({ text: e.target.value })} value={this.state.text} />
            <button onClick={() => {
              actions.addTodo(this.state.text)
              this.setState({ text: '' });
            }}>Add</button>
            <button onClick={() => actions.clearTodo()}>Reload</button>
          </div>
        )}
      </appContext.Consumer>
    );
  }
}

export default Forms;
