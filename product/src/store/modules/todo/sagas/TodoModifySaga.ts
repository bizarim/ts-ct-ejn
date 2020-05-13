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
        const rs = yield call(API.get({ service: ServiceType.todo }), '', action.payload);
        yield put(todoModifyRes(rs));
    } catch (error) {
        yield put(todoModifyErr(error));
    }
}
