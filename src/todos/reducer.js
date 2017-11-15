import * as ActionTypes from './actionTypes';

export default (state = [], action) => {
  // console.log(state, action);
  switch (action.type) {

    case ActionTypes.ADD_TODO:
      return [
        {
          id: action.id,
          title: action.title,
          completed: action.completed,
        },
        ...state
      ];

    case ActionTypes.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed}
        } else {
          return item;
        }
      });

    case ActionTypes.REMOVE_TODO:
      return state.filter(item => {
        return item.id !== action.id;
      });

    case ActionTypes.CLEAR_COMPLETED:
      return state.filter(item => !item.completed);

    case ActionTypes.EDIT_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, title: action.title};
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}