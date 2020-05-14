import { put, call } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
    TodoModifyReq,
    todoModifyRes,
    todoModifyErr,
} from '../actions';
import { ServiceType } from '../../../../constants';

export function* todoModifySaga(action: TodoModifyReq) {
    try {
        const rs = yield call(API.put({ service: ServiceType.todo }), `/todos/${action.payload.data.id}`, action.payload.data);
        yield put(todoModifyRes(rs));
    } catch (error) {
        yield put(todoModifyErr(error));
    }
}
