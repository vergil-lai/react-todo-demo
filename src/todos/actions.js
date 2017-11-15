import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO
} from './actionTypes';

let nextTodoId = 1;

export const addTodo = (title) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId++,
  title
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});

export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  id,
  title,
});