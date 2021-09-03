import * as types from './ActionTypes';

// action creator
export function setFilter(filter){
    return {
        type: types.SET_FILTER,
        filter
    };
}