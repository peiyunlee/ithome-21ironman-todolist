import * as types from './ActionTypes';

// action creator
export function addTask(taskName){
    return {
        type: types.ADD_TASK,
        taskName
    };
}

export function deleteTask(idx){
    return {
        type: types.DELETE_TASK,
        idx
    };
}

export function toggleTask(idx){
    return {
        type: types.TOGGLE_TASK,
        idx
    };
}