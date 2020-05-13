import { put, call } from 'redux-saga/effects';
import { API } from '../../../../api';
import {
    TodoGetListReq,
    todoGetListRes,
    todoGetListErr,
} from '../actions';
import { ServiceType } from '../../../../constants';

export function* todoGetListSaga(action: TodoGetListReq) {
    try {
        const rs = yield call(API.get({ service: ServiceType.todo }), '', action.payload);
        yield put(todoGetListRes(rs));
    } catch (error) {
        yield put(todoGetListErr(error));
    }
}
