import React from 'react';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../../selectors';
import TodoItem from './TodoItem';

function TodoList ({todos}) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {
          todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          ))
        }
      </ul>
    </section>
  )
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state),
});

export default connect(mapStateToProps)(TodoList);