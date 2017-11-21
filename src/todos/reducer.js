import { combineActions, handleActions } from 'redux-actions';
import undoable from 'redux-undo'
// import reduceReducers from 'reduce-reducers';
// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

import {
  getTodos,
  addTodo,
  toggleTodo,
  removeTodo,
  clearCompleted,
  editTodo,
} from './actions';


// const reducer = (state = [], action) => {
//
//   console.log(action);
//
//   return state;
// };
//
// export default reducer;


// const addTodoAction= handleAction('TODO/ADD_FULFILLED', {
//   next(state, {payload}) {
//
//     console.log(111);
//
//     return [...state, payload];
//   },
//   throw(state, {payload}) {
//     console.log(222);
//
//     return [...state];
//   }
// }, []);
//
// export default reduceReducers(addTodoAction);


const reducer = handleActions({

  [`${getTodos}_FULFILLED`]: (state, {payload}) => payload,

  [`${addTodo}_FULFILLED`]: (state, {payload}) => ([
    ...state, payload
  ]),

  [`${editTodo}_PENDING`]: (state, {payload: {id, title}}) => state.map(item => (item.id === id) ? {...item, title} : item),

  [combineActions(`${toggleTodo}_FULFILLED`, `${editTodo}_FULFILLED`)]: (state, {payload}) =>
    state.map(item => (item.id === payload.id ? payload : item)),

  [`${removeTodo}_FULFILLED`]: (state, {payload: {id}}) => state.filter(item => item.id !== id),

  [`${clearCompleted}_REJECTED`]: (state) => state.filter(item => !item.completed),

}, []);

export default reducer;
