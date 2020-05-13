import {
    TODO_GET_LIST_ERR,
    TODO_GET_LIST_REQ,
    TODO_GET_LIST_RES,
    TODO_ADD_ERR,
    TODO_ADD_REQ,
    TODO_ADD_RES,
    TODO_MODIFY_ERR,
    TODO_MODIFY_REQ,
    TODO_MODIFY_RES,
} from './constants';
import {
    CommonErrorPayload,
    TodoData,
} from './types';
import { TodoAction } from './actions';
import { stat } from 'fs';

export interface TodoState {
    datas: TodoData[];
    error?: CommonErrorPayload;
}


export const initialState: TodoState = {
    datas: [],
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    // tslint:disable-next-line:no-console
    console.log(state.datas);
    switch (action.type) {
        case TODO_GET_LIST_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case TODO_GET_LIST_REQ:
            return {
                ...state,
                error: undefined,
            };
        case TODO_GET_LIST_RES:
            return {
                ...state,
                error: undefined,
            };
        case TODO_ADD_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case TODO_ADD_REQ:
            return {
                ...state,
            };
        case TODO_ADD_RES:
            return {
                ...state,
                error: undefined,
            };
        case TODO_MODIFY_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case TODO_MODIFY_REQ:
            return {
                ...state,
            };
        case TODO_MODIFY_RES:
            return {
                ...state,
                error: undefined,
            };
        default:
            return state;
    }
};
