import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter';

const middlewares = [ReduxThunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(ReduxImmutableStateInvariant());
}

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export default createStore(
  reducer,
  enhancer
);