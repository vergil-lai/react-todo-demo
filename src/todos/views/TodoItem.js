import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { editTodo, toggleTodo, removeTodo } from '../actions';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TodoItem extends Component {

  constructor() {
    super(...arguments);

    this.handleEditing = this.handleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      editing: false,
      editText: this.props.title,
    };
  }

  handleEditing() {
    this.setState({
      editing: true,
    });
  }

  handleChange(event) {
    if (this.state.editing) {
      this.setState({editText: event.target.value});
    }
  }

  handleKeyDown(event) {

    if (event.which === ESCAPE_KEY) {
      this.setState({
        editing: false,
        editText: this.props.title,
      });

    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  handleSubmit() {
    this.setState({
      editing: false,
    });

    this.props.onSave(this.props.id, this.refs.editInput.value);
  }

  componentDidUpdate(prevProps) {
    if (this.state.editing) {
      let node =  this.refs.editInput;

      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  render() {

    const {id, title, completed, onToggle, onRemove} = this.props;
    const {editing, editText} = this.state;

    return (
      <li className={classNames({completed, editing})}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={() => onToggle(id)} />
          <label onDoubleClick={this.handleEditing}>{title}</label>
          <button className="destroy" onClick={() => onRemove(id)} />
        </div>

        <input
          className="edit"
          value={editText}
          onBlur={this.handleSubmit}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          ref="editInput"
        />
      </li>
    );
  }

}

const mapDispatchToProps = {
  onSave: editTodo,
  onToggle: toggleTodo,
  onRemove: removeTodo
};

export default connect(null, mapDispatchToProps)(TodoItem);