import React, {Component} from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  add() {
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/>
        <button onClick={() => this.add()}>Add</button>
        <button onClick={() => this.props.reloadTodo()}>Reload</button>
      </div>
    );
  }
}

export default Forms;
