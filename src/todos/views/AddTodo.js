import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {

  constructor() {
    super(...arguments);

    // this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  // handleChange(event) {
  //   if (event.target.value)
  //     this.inputValue = event.target.value;
  // }

  addTodo(event) {
    event.preventDefault();

    let newTodo = this.refs.newTodo.value;

    if (!newTodo.trim()) {
      return;
    }

    this.props.onAdd(newTodo);
    this.refs.newTodo.value = '';
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.addTodo}>
          <input className="new-todo" placeholder="What needs to be done?" ref="newTodo" autoFocus />
        </form>
      </header>
    );
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (title) => {
//       dispatch(addTodo(title));
//     }
//   }
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   onAdd: addTodo
// }, dispatch);

const mapDispatchToProps = {
  onAdd: addTodo,
};


export default connect(null, mapDispatchToProps)(AddTodo);