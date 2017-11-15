import { createAction } from 'redux-actions';

export const setFilter = createAction('FILTER/SET', filter => ({ filter }));