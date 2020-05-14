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

export interface TodoState {
    datas: TodoData[];
    lastId: number;
    initList: boolean;
    canLoading: boolean;
    error?: CommonErrorPayload;
}


export const initialState: TodoState = {
    datas: [],
    lastId: -1,
    initList: false,
    canLoading: true,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {

    switch (action.type) {
        case TODO_GET_LIST_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case TODO_GET_LIST_REQ:
            return {
                ...state,
                canLoading: false,
            };
        case TODO_GET_LIST_RES:
            let newLastId = 0;

            if (0 < action.payload.datas.length) {
                if (!state.initList) state.initList = true;
                newLastId = action.payload.datas.sort((a, b) => a.id - b.id)[0].id;
                if (newLastId !== state.lastId) {
                    state.lastId = newLastId < state.lastId || state.datas.length <= 0 ? newLastId : state.lastId;
                    state.datas = state.datas.concat(action.payload.datas);
                }
            }

            return {
                ...state,
                datas: [...state.datas],
                lastId: newLastId,
                canLoading: true,
                error: undefined,
            };
        case TODO_ADD_ERR:
            return {
                ...state,
                error: action.payload,
            };
        case TODO_ADD_REQ:
            return state;
        case TODO_ADD_RES:
            state.datas.push(action.payload);
            return {
                ...state,
                datas: [...state.datas],
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
            const list = state.datas.filter(o => o.id !== action.payload.id);
            list.push(action.payload);

            return {
                ...state,
                datas: [...list],
                error: undefined,
            };
        default:
            return state;
    }
};
