import { createSelector } from 'reselect';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from './constants';

const getVisibilityFilter = (state) => state.filter;

const getTotos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTotos],
  (filter, todos) => {
    switch (filter) {
      case FILTER_ALL:
        return todos;
      case FILTER_ACTIVE:
        return todos.filter(item => !item.completed);
      case FILTER_COMPLETED:
        return todos.filter(item => item.completed);
      default:
        throw new Error('没有这个filter');
    }
  }
);
