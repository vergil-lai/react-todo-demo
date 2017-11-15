import { createAction } from 'redux-actions';

let nextTodoId = 1;

export const addTodo = createAction('TODO/ADD', title => (
  {
    id: nextTodoId++,
    completed: false,
    title,
  }
));

export const toggleTodo = createAction('TODO/TOGGLE', id => ({ id }));

export const removeTodo = createAction('TODO/REMOVE', id => ({ id }));

export const clearCompleted = createAction('TODO/CLEAR_COMPLETED');

export const editTodo = createAction('TODO/EDIT', (id, title) => ({ id, title }));
