import { put, call } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
    TodoAddReq,
    todoAddRes,
    todoAddErr,
} from '../actions';
import { ServiceType } from '../../../../constants';

export function* todoAddSaga(action: TodoAddReq) {
    try {
        const rs = yield call(API.get({ service: ServiceType.todo }), '', action.payload);
        yield put(todoAddRes(rs));
    } catch (error) {
        yield put(todoAddErr(error));
    }
}
