import uniqueId from '../../utils/unique_id.js';
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  linkState(key) {
    // here we use '[key]' to set the key to be the value of the 'key' variable,
    // as opposed to a string of 'key'
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  addToDo () {
    return () => {
      const newTodo = {};
      newTodo['id'] = uniqueId();
      newTodo['title'] = this.state.title;
      newTodo['body'] = this.state.body;
      this.props.receiveTodo(newTodo);
    };
  }

  render () {
    return (
      <div>
        <input type="text" onChange={ this.linkState('title') } value={ this.state.word }/>
        <textarea onChange={ this.linkState('body')} value={this.state.body} />
        <input type='submit' onClick={ this.addToDo() } value='submit' />
      </div>
    );
  }
}

export default TodoForm;
