import * as types from '../actions/ActionTypes';

//預設show all
export default function filter(state = 'SHOW_ALL', action) {
    switch (action.type) {
      case types.SET_FILTER:
        return action.filter;
      default:
        return state;
    }
}