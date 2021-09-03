import { combineReducers } from 'redux';

import filterReducer from './filter';
import todosReducer from './todos';

const todoApp = combineReducers({
    filterReducer,
    todosReducer
});

export default todoApp;