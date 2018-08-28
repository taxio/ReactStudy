import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.text,
      done: this.props.done,
    };
  }

  onClick() {
    console.log('click!');
    this.setState({done: !this.state.done});
  }

  render() {
    return (
      <li
        onClick={(e) => this.onClick(e)}
        style={{textDecoration: this.state.done ? 'line-through' : 'none'}}>
        <p>
          {this.props.id}: {this.props.text}
        </p>
      </li>
    );
  }
}

export default Todo;
