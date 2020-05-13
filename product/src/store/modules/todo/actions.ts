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
    TodoGetListReqPayload,
    TodoGetListResPayload,
    TodoAddReqPayload,
    TodoAddResPayload,
    TodoModifyReqPayload,
    TodoModifyResPayload,
} from './types';



export interface TodoGetListErr {
    type: typeof TODO_GET_LIST_ERR;
    payload: CommonErrorPayload;
}
export interface TodoGetListReq {
    type: typeof TODO_GET_LIST_REQ;
    payload: TodoGetListReqPayload;
}
export interface TodoGetListRes {
    type: typeof TODO_GET_LIST_RES;
    payload: TodoGetListResPayload;
}

export interface TodoAddErr {
    type: typeof TODO_ADD_ERR;
    payload: CommonErrorPayload;
}
export interface TodoAddReq {
    type: typeof TODO_ADD_REQ;
    payload: TodoAddReqPayload;
}
export interface TodoAddRes {
    type: typeof TODO_ADD_RES;
    payload: TodoAddResPayload;
}

export interface TodoModifyErr {
    type: typeof TODO_MODIFY_ERR;
    payload: CommonErrorPayload;
}
export interface TodoModifyReq {
    type: typeof TODO_MODIFY_REQ;
    payload: TodoModifyReqPayload;
}
export interface TodoModifyRes {
    type: typeof TODO_MODIFY_RES;
    payload: TodoModifyResPayload;
}
export type TodoAction
    = TodoGetListErr
    | TodoGetListReq
    | TodoGetListRes
    | TodoAddErr
    | TodoAddReq
    | TodoAddRes
    | TodoModifyErr
    | TodoModifyReq
    | TodoModifyRes
    ;

export const todoGetListErr = (payload: TodoGetListErr['payload']): TodoGetListErr => ({
    type: TODO_GET_LIST_ERR,
    payload,
});
export const todoGetListReq = (payload: TodoGetListReq['payload']): TodoGetListReq => ({
    type: TODO_GET_LIST_REQ,
    payload,
});
export const todoGetListRes = (payload: TodoGetListRes['payload']): TodoGetListRes => ({
    type: TODO_GET_LIST_RES,
    payload,
});

export const todoAddErr = (payload: TodoAddErr['payload']): TodoAddErr => ({
    type: TODO_ADD_ERR,
    payload,
});
export const todoAddReq = (payload: TodoAddReq['payload']): TodoAddReq => ({
    type: TODO_ADD_REQ,
    payload,
});
export const todoAddRes = (payload: TodoAddRes['payload']): TodoAddRes => ({
    type: TODO_ADD_RES,
    payload,
});

export const todoModifyErr = (payload: TodoModifyErr['payload']): TodoModifyErr => ({
    type: TODO_MODIFY_ERR,
    payload,
});
export const todoModifyReq = (payload: TodoModifyReq['payload']): TodoModifyReq => ({
    type: TODO_MODIFY_REQ,
    payload,
});
export const todoModifyRes = (payload: TodoModifyRes['payload']): TodoModifyRes => ({
    type: TODO_MODIFY_RES,
    payload,
});
