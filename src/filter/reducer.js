import { FILTER_ALL } from '../constants';
import { SET_FILTER } from './actionTypes';

export default (state = FILTER_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}