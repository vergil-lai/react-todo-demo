import { handleActions } from 'redux-actions';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
  editTodo
} from './actions';

export default handleActions({
  [addTodo]: (state, {payload}) => ([
    ...state, payload
  ]),

  [toggleTodo]: (state, {payload: {id}}) => state.map(item => (
    item.id === id ? {...item, completed: !item.completed} : item
  )),

  [removeTodo]: (state, {payload: {id}}) => state.filter(item => item.id !== id),

  [clearCompleted]: (state) => state.filter(item => !item.completed),

  [editTodo]: (state, {payload: {id, title}}) => state.map(item => (item.id === id) ? {...item, title} : item)

}, []);
