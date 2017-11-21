import { createAction } from 'redux-actions';
import axios from 'axios';
import { API_URL } from '../constants';

export const getTodos = createAction('TODO_FETCH', () => {
  return axios.get(API_URL).then(response => {
    return response.data;
  }, error => {
    throw error;
  })
});

export const addTodo = createAction('TODO_ADD', (title) => {
  return axios.post(API_URL, {title}).then(response => {
    return response.data;
  }, error => {
    throw error;
  });
});

export const toggleTodo = createAction('TODO_TOGGLE', (id, completed) => {
  return axios.put(`${API_URL}/${id}`, {completed}).then(response => {
    return response.data;
  })
});

export const removeTodo = createAction('TODO_REMOVE', id => {
  return axios.delete(`${API_URL}/${id}`).then(response => {
    return {id};
  }, error => {
    throw error;
  })
});

export const editTodo = createAction('TODO_EDIT', (id, title) => ({
  promise: () => {
    return axios.put(`${API_URL}/${id}`, {title}).then(response => {
      return response.data;
    }, error => {
      throw error;
    })
  },
  data: {
    id, title
  }
}));

export const clearCompleted = createAction('TODO_CLEAR_COMPLETED', () => {
  return axios.delete(`${API_URL}/clear-completed`).then(() => null);
});