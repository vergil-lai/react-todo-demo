import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { actions as todoActions } from '../../todos';
import classNames from 'classnames';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../../constants';

function Filter({undo, filter, onSetFilter, onClearCompleted}) {
  return (
    <footer className="footer">
    <span className="todo-count">
      <strong>{undo}</strong> item{ undo > 1 ? 's' : ''} left
    </span>
      <ul className="filters">
        <li>
          <a className={classNames({selected: filter === FILTER_ALL})}
             href="#/" onClick={() => onSetFilter(FILTER_ALL)}>
            All
          </a>
        </li>
        <li>
          <a className={classNames({selected: filter === FILTER_ACTIVE})}
             href="#/active" onClick={() => onSetFilter(FILTER_ACTIVE)}>
            Active
          </a>
        </li>
        <li>
          <a className={classNames({selected: filter === FILTER_COMPLETED})}
             href="#/completed" onClick={() => onSetFilter(FILTER_COMPLETED)}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => onClearCompleted()}>Clear completed</button>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  undo: state.todos.filter(item => !item.completed).length,
  filter: state.filter
});

const mapDispatchToProps = {
  onSetFilter: setFilter,
  onClearCompleted: todoActions.clearCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);