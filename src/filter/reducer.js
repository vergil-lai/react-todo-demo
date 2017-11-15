import { handleActions } from 'redux-actions';

import { FILTER_ALL } from '../constants';
import { setFilter } from './actions';

export default handleActions({
  [setFilter]: (state, {payload: {filter}}) => filter,
}, FILTER_ALL);
