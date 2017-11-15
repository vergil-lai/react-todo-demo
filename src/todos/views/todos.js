import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default () => (
  <div className="todos">
    <AddTodo/>
    <TodoList/>
  </div>
);